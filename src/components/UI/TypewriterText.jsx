import { useEffect, useState } from "react";
import styles from "../../styles/UI/TypeWriter.module.css";

const TypewriterText = ({ texts, className = "" }) => {
  const [visibleTexts, setVisibleTexts] = useState([]);

  useEffect(() => {
    texts.forEach((_, index) => {
      setTimeout(() => {
        setVisibleTexts(prev => [...prev, index]);
      }, 2000 + index * 2500);
    });
  }, [texts]);

  return (
    <div className={`${styles.container} ${className}`}>
      {texts.map((text, index) => (
        <p
          key={index}
          className={styles.text}
          style={{ '--index': index }}
        >
          {text}
        </p>
      ))}
    </div>
  );
};

export default TypewriterText;
