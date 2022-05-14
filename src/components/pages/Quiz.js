import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";
import { useParams } from "react-router-dom";
import useQuestions from "../../hooks/useQuestions";
import { useEffect, useState } from "react";
import _ from "lodash";

export default function Quiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const { id } = useParams();
    const { loading, error, questions } = useQuestions(id);
    const [clonedQuestions, setClonedQuestions] = useState([]);

    useEffect(() => {
        questions.forEach((question) => {
            question.options.forEach((option) => {
                option.checked = false;
            });
        });

        setClonedQuestions(_.cloneDeep(questions));
    }, [questions]);

    function gotoNextQuestion() {
        console.log(clonedQuestions[currentQuestionIndex]);

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

    function currentQuestion() {
        return clonedQuestions[currentQuestionIndex];
    }

    const progress = questions.length > 0 ? ((currentQuestionIndex + 1) / questions.length) * 100 : 0;

    function handleAnswerChange(e, optionIndex) {
        setClonedQuestions((prevData) => {
            return {
                ...prevData,
                ...(clonedQuestions[currentQuestionIndex].options[optionIndex].checked = e.target.checked),
            };
        });
    }

    async function submit() {
        console.log(clonedQuestions);
        console.log("submit form");
    }

    return (
        <>
            {loading && <div>Loading ...</div>}
            {error && <div>There was an error!</div>}
            {!loading && currentQuestion() && (
                <>
                    <h1>{currentQuestion().title}</h1>
                    <h4>Question can have multiple answers</h4>
                    <Answers options={currentQuestion().options} handleAnswerChange={handleAnswerChange} />
                    <ProgressBar
                        gotoNextQuestion={gotoNextQuestion}
                        gotoPrevQuestion={gotoPrevQuestion}
                        progress={progress}
                        currentQuestionIndex={currentQuestionIndex}
                        submit={submit}
                    />
                    <MiniPlayer />
                </>
            )}
        </>
    );
}
