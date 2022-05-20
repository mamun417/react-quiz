import classes from "../styles/ProgressBar.module.css";
import Button from "./Button";
import { useState } from "react";

export default function ProgressBar({ gotoNextQuestion, gotoPrevQuestion, progress, currentQuestionIndex, submit }) {
    const [showToolTip, setShowToolTip] = useState(false);
    const [toolTipStyle, setTooltipStyle] = useState({});

    const toggleToolTip = () => {
        setTooltipStyle(() => {
            return { left: `calc(${progress}% - 65px)` };
        });

        setShowToolTip((showToolTip) => !showToolTip);
    };

    return (
        <div className={classes.progressBar}>
            <div
                onClick={gotoPrevQuestion}
                className={classes.backButton + `${currentQuestionIndex === 0 ? " disabled" : ""}`}
            >
                <span className="material-icons-outlined"> arrow_back </span>
            </div>

            <div className={classes.rangeArea}>
                <div className={`${classes.tooltip} ${!showToolTip && "hidden"}`} style={toolTipStyle}>
                    {progress}% Complete!
                </div>
                <div className={classes.rangeBody}>
                    <div
                        onMouseOver={toggleToolTip}
                        onMouseOut={toggleToolTip}
                        className={classes.progress}
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            <Button onClick={progress === 100 ? submit : gotoNextQuestion} className={classes.next}>
                <span>{progress === 100 ? "Submit Answers" : "Next Question"}</span>
                <span className="material-icons-outlined"> arrow_forward </span>
            </Button>
        </div>
    );
}
