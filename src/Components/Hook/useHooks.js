import axios from "axios";
import React, { useEffect, useState } from "react";

const useHooks = () => {
  const [appsData, setAppsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios("./AppData.json")
      .then((data) => setAppsData(data.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);
  return { appsData, loading, error };
};

export default useHooks;
