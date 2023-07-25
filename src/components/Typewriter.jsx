import { useState, useEffect, useMemo } from "react";

const Typewriter = () => {
  const textsToType = useMemo(() => ["SASS", "BTC", "BTB"], []);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      if (currentCharIndex < textsToType[currentTextIndex].length) {
        setCurrentCharIndex((prevIndex) => prevIndex + 1);
      } else {
        // Typing for the current text is complete, move to the next text.
        setCurrentCharIndex(0);
        setCurrentTextIndex(
          (prevIndex) => (prevIndex + 1) % textsToType.length
        );
      }
    }, 200); // Adjust the speed of typing by changing the delay (in milliseconds)

    return () => clearTimeout(typingTimer);
  }, [currentCharIndex, currentTextIndex, textsToType]);

  return (
    <div className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2">
      {textsToType[currentTextIndex].substring(0, currentCharIndex)}
    </div>
  );
};

export default Typewriter;
