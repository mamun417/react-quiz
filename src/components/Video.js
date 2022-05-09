import image from "../assets/images/3.jpg";
import classes from "../styles/Video.module.css";
import { Link } from "react-router-dom";

export default function Video(video) {
    return (
        <Link to={`quiz/${video.youtubeID}`}>
            <div className={classes.video}>
                <img src={`http://img.youtube.com/vi/${video.youtubeID}/maxresdefault.jpg`} alt="Video Title" />
                <p>{video.title}</p>
                <div className={classes.qmeta}>
                    <p>{video.noq} Questions</p>
                    <p>Score : Not taken yet</p>
                </div>
            </div>
        </Link>
    );
}
