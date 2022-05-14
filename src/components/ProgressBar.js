import classes from "../styles/ProgressBar.module.css";
import Button from "./Button";

export default function ProgressBar({ gotoNextQuestion, gotoPrevQuestion, progress, currentQuestionIndex, submit }) {
    return (
        <div className={classes.progressBar}>
            <div
                onClick={gotoPrevQuestion}
                className={classes.backButton + `${currentQuestionIndex === 0 ? " disabled" : ""}`}
            >
                <span className="material-icons-outlined"> arrow_back </span>
            </div>

            <div className={classes.rangeArea}>
                <div className={classes.tooltip}>{progress}% Complete!</div>
                <div className={classes.rangeBody}>
                    <div className={classes.progress} style={{ width: `${progress}%` }} />
                </div>
            </div>

            <Button onClick={progress === 100 ? submit : gotoNextQuestion} className={classes.next}>
                <span>{progress === 100 ? "Submit Answers" : "Next Question"}</span>
                <span className="material-icons-outlined"> arrow_forward </span>
            </Button>
        </div>
    );
}
