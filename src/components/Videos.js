import classes from "../styles/Videos.module.css";
import Video from "./Video";
import { useState } from "react";
import useVideoList from "../hooks/useVideoList";

export default function Videos() {
    const { loading, error, videos, hasMore } = useVideoList();

    return (
        <>
            <div className={classes.videos}>
                {videos.map((video, k) => (
                    <Video key={k} {...video} />
                ))}

                {!loading && videos.length === 0 && <div>No data found!</div>}
                {error && <div>There was an error!</div>}
                {loading && <div>Loading...</div>}
            </div>
        </>
    );
}
