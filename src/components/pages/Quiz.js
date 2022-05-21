import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";
import { useNavigate, useParams } from "react-router-dom";
import useQuestions from "../../hooks/useQuestions";
import { useEffect, useReducer, useState } from "react";
import _ from "lodash";
import { useAuth } from "../../context/AuthContext";
import { getDatabase, ref, set } from "firebase/database";

const quizInitialState = {};

const quizReducer = (state, action) => {
    switch (action.type) {
        case "questions":
            action.value.forEach((question) => {
                question.options.forEach((option) => {
                    option.checked = false;
                });
            });
            return action.value;
        case "answer":
            const questions = _.cloneDeep(state);
            questions[action.currentQuestionIndex].options[action.optionIndex].checked = action.value;

            return questions;
        default:
            return state;
    }
};

export default function Quiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const { id } = useParams();
    const { loading, error, questions } = useQuestions(id);
    const [qna, dispatch] = useReducer(quizReducer, quizInitialState);
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch({
            type: "questions",
            value: questions,
        });
    }, [questions]);

    function gotoNextQuestion() {
        if (currentQuestionIndex + 1 === questions.length) {
            return false;
        }

        setCurrentQuestionIndex((currentQuestionIndex) => currentQuestionIndex + 1);
    }

    function gotoPrevQuestion() {
        if (currentQuestionIndex === 0) {
            return false;
        }

        setCurrentQuestionIndex((currentQuestionIndex) => currentQuestionIndex - 1);
    }

    const currentQuestion = qna[currentQuestionIndex];

    const progress = questions.length > 0 ? ((currentQuestionIndex + 1) / questions.length) * 100 : 0;

    function handleAnswerChange(e, optionIndex) {
        dispatch({
            type: "answer",
            currentQuestionIndex,
            optionIndex: optionIndex,
            value: e.target.checked,
        });
    }

    async function submit() {
        const { uid } = currentUser;

        const db = getDatabase();
        const resultRef = ref(db, `result/${uid}`);

        await set(resultRef, {
            [id]: qna,
        });

        navigate(`/result/${id}`, {
            replace: true,
            state: {
                qna,
            },
        });
    }

    return (
        <>
            {loading && <div>Loading ...</div>}
            {error && <div>There was an error!</div>}
            {!loading && currentQuestion && (
                <>
                    <h1>{currentQuestion.title}</h1>
                    <h4>Question can have multiple answers</h4>
                    <Answers options={currentQuestion.options} handleAnswerChange={handleAnswerChange} />
                    <ProgressBar
                        gotoNextQuestion={gotoNextQuestion}
                        gotoPrevQuestion={gotoPrevQuestion}
                        progress={progress}
                        currentQuestionIndex={currentQuestionIndex}
                        submit={submit}
                    />
                    <MiniPlayer youtubeId={id} currentQuestion={currentQuestion} />
                </>
            )}
        </>
    );
}
