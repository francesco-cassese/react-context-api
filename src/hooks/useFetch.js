import { useEffect } from "react";
import { useState } from "react";

function useFetch(url) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(json => {
                setData(json);
            })
            .catch(error => {
                console.error(error);
            });
    }, [url]);
    return data;
}

export default useFetch; 