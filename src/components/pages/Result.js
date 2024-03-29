import Analysis from "../Analysis";
import Summary from "../Summary";
import useAnswers from "../../hooks/useAnswers";
import { useLocation, useParams } from "react-router-dom";
import _ from "lodash";

export default function Result() {
    const { state } = useLocation();
    const { qna } = state;
    const { id: videoId } = useParams();
    const { loading, error, answers } = useAnswers(videoId);

    function calculate() {
        let score = 0;

        answers.forEach((question, index1) => {
            let correctIndexes = [],
                checkedIndexes = [];

            question.options.forEach((option, index2) => {
                if (option.correct) {
                    correctIndexes.push(index2);
                }

                if (qna[index1].options[index2].checked) {
                    checkedIndexes.push(index2);
                    option.checked = true;
                }
            });

            if (_.isEqual(correctIndexes, checkedIndexes)) {
                score = score + 5;
                question.right_answer = true;
            }
        });

        return score;
    }

    const userScore = calculate();

    return (
        <>
            {loading && <div>Loading...</div>}
            {error && <div>There was an error!</div>}

            {answers && answers.length > 0 && (
                <>
                    <Summary score={userScore} noq={answers.length} />
                    <Analysis answers={answers} />
                </>
            )}
        </>
    );
}
