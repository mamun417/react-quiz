import { useEffect, useState } from "react";
import { get, getDatabase, limitToFirst, orderByKey, query, ref, startAt } from "firebase/database";

export default function useVideoList(page) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [videos, setVideos] = useState([]);
    const [hasMore, setHasmore] = useState(true);

    useEffect(() => {
        (() => {
            setLoading(true);

            setTimeout(async () => {
                await fetchVideos();
            }, 2000);
        })();
        // eslint-disable-next-line
    }, [page]);

    async function fetchVideos() {
        const db = getDatabase();
        const videoRef = ref(db, "videos");
        const videoQuery = query(videoRef, orderByKey(), startAt("" + page), limitToFirst(6));

        try {
            setError(false);
            setLoading(true);

            const snapshot = await get(videoQuery);

            if (snapshot.exists()) {
                setVideos((prevVideos) => {
                    return [...prevVideos, ...Object.values(snapshot.val())];
                });
            } else {
                setHasmore(false);
            }

            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError(true);
        }
    }

    return {
        loading,
        error,
        videos,
        hasMore,
    };
}
