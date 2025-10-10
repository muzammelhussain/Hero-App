import React from "react";
import { useEffect, useState } from "react";
const UseLoader = (delay = 2000) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // delay is available because it's a parameter of the hook
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]); // 👈 add delay as a dependency

  return loading;
};

export default UseLoader;
