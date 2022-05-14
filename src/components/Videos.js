import classes from "../styles/Videos.module.css";
import Video from "./Video";
import { useState } from "react";
import useVideoList from "../hooks/useVideoList";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Videos() {
    const [page, setPage] = useState(1);
    const { loading, error, videos, hasMore } = useVideoList(page);

    const loadMoreData = () => setPage((prevPage) => prevPage + 6);

    return (
        <>
            <InfiniteScroll next={loadMoreData} hasMore={hasMore} dataLength={videos.length}>
                <div className={classes.videos}>
                    {videos.map((video, k) => (
                        <Video key={k} {...video} />
                    ))}

                    {!loading && videos.length === 0 && <div>No data found!</div>}
                    {error && <div>There was an error!</div>}
                    {loading && <div>Loading...</div>}
                </div>
            </InfiniteScroll>
        </>
    );
}
