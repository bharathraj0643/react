import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setTimeout(() => {
      fetch(url, { signal })
        .then((response) => {
          if (!response.ok) {
            throw Error(
              "Couldn't retrive data (API down?)..... \n404 path not found "
            );
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
        })
        .catch((err) => {
          console.log(err);
          setError(err.message);
        });
    }, 1000);

    return () => {
      console.log("Unmounted Home , API of posts");
      controller.abort();
    };
  }, []);

  return [data, error];
}

export default useFetch;
