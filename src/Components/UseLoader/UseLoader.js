import React from "react";
import { useEffect, useState } from "react";
const UseLoader = (delay = 2000) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return loading;
};

export default UseLoader;
