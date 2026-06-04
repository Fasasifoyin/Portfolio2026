"use client"

import { useEffect, useRef, useState } from "react";

const useTypingAnimation = (words: string[], speed = 80, pause = 2000) => {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = words[wordIndex];

    const handleTyping = () => {
      if (!isDeleting && displayed === current) {
        timeout.current = setTimeout(() => {
          setIsDeleting(true);
        }, pause);
        return;
      }

      if (isDeleting && displayed === "") {
        setIsDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
        return;
      }

      setDisplayed((prev) =>
        isDeleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1),
      );
    };

    timeout.current = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);

    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, [displayed, isDeleting, wordIndex, words, speed, pause]);

  return displayed;
};

export default useTypingAnimation;
