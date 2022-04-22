import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";
import { useParams, useRouteMatch } from "react-router-dom";

export default function Quiz() {
    let match = useRouteMatch();
    let params = useParams();
    console.log({ match, params });

    return (
        <>
            <h1>Pick three of your favorite Star Wars Films</h1>
            <h4>Question can have multiple answers</h4>
            <Answers />
            <ProgressBar />
            <MiniPlayer />
        </>
    );
}
