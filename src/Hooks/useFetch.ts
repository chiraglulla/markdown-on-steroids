import { useState, useEffect } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoader] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortUpdate = new AbortController();

    fetch(url, {
      credentials: "omit",
      signal: abortUpdate.signal,
    })
      .then((res) => {
        if (!res.ok) throw Error("Could not fetch the data.");
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoader(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") console.log("Fetch Aborted.");
        else {
          setError(err.message);
          setLoader(false);
        }
      });

    return () => abortUpdate.abort();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
