import classes from "../styles/Videos.module.css";
import Video from "./Video";
import { useState } from "react";

export default function Videos() {
    const [videoCount, setVideoCount] = useState(6);

    return (
        <>
            {/*<button onClick={() => setVideoCount((currentCount) => currentCount + 1)}>Increase Me</button>*/}
            {/*<button onClick={() => setVideoCount((currentCount) => currentCount - 1)}>Decrease Me</button>*/}
            <div className={classes.videos}>
                {(() => {
                    let rows = [];
                    for (let i = 0; i < videoCount; i++) {
                        rows.push(<Video key={i} id={i} />);
                    }
                    return rows;
                })()}
                {/*<Video />*/}
                {/*<Video />*/}
                {/*<Video />*/}
                {/*<Video />*/}
                {/*<Video />*/}
                {/*<Video />*/}
            </div>
        </>
    );
}
