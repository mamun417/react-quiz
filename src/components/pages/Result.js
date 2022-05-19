import Analysis from "../Analysis";
import Summary from "../Summary";

export default function Result() {
    console.log("show result");
    return (
        <>
            <Summary />
            <Analysis />
        </>
    );
}
