import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

export default function Answers({ options = [], handleAnswerChange }) {
    return (
        <div className={classes.answers}>
            {options.map((option, index) => {
                return (
                    <Checkbox
                        key={index}
                        text={option.title}
                        className={classes.answer}
                        checked={option.checked}
                        onChange={(e) => handleAnswerChange(e, index)}
                    />
                );
            })}
        </div>
    );
}
