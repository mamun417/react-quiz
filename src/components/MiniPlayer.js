import classes from "../styles/MiniPlayer.module.css";
import { useState } from "react";
import ReactPlayer from "react-player/youtube";

export default function MiniPlayer({ youtubeId, currentQuestion }) {
    const [showMiniPlayer, setShowMiniPlayer] = useState(false);

    const toggleMiniPlayer = () => {
        setShowMiniPlayer((showMiniPlayer) => !showMiniPlayer);
    };

    return (
        <div className={`${classes.miniPlayer} ${!showMiniPlayer && classes.floatingBtn}`}>
            <span className={`material-icons-outlined ${classes.open}`} onClick={toggleMiniPlayer}>
                play_circle_filled
            </span>
            <span className={`material-icons-outlined ${classes.close}`} onClick={toggleMiniPlayer}>
                close
            </span>
            <ReactPlayer
                className={classes.player}
                url={`https://www.youtube.com/watch?v=${youtubeId}`}
                controls={true}
                playing={showMiniPlayer}
                width="300px"
                height="168px"
            />
            <p>{currentQuestion.title}</p>
        </div>
    );
}
