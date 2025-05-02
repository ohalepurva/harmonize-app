"use client";

import { useEffect, useRef, useState } from "react";

const useTableMaxRows = (items: Array<Object>) => {
  const [maxRows, setMaxRows] = useState(4);
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting ? setMaxRows(items?.length) : setMaxRows(4);
      },
      { root: null, threshold: 0.1 }
    );

    observer.observe(observerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return { maxRows, observerRef };
};

export default useTableMaxRows;
