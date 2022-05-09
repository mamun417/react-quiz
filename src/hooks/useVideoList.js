import { useEffect, useState } from "react";
import { get, getDatabase, limitToFirst, orderByKey, query, ref, startAt } from "firebase/database";

export default function useVideoList() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        (async () => {
            await fetchVideos();
        })();
    }, []);

    async function fetchVideos() {
        const db = getDatabase();
        const videoRef = ref(db, "videos");
        const videoQuery = query(videoRef, orderByKey());

        try {
            setError(false);
            setLoading(true);

            const snapshot = await get(videoQuery);

            if (snapshot.exists()) {
                setVideos((prevVideos) => {
                    return [...prevVideos, ...Object.values(snapshot.val())];
                });
            } else {
                //
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
    };
}
