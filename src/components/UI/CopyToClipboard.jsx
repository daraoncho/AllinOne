import { useState } from "react";
import { useClipboard } from "../../hooks/useClipboard";
import IconRenderer from "./IconRenderer";
import styles from "../../styles/UI/CopyToClipboard.module.css";

const CopyToClipboard = ({ text, className = "" }) => {
  const { copied, copyToClipboard } = useClipboard();

  const handleCopy = () => {
    copyToClipboard(text);
  };

  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.iconContainer}>
        <IconRenderer name="home" size="20px" />
      </div>
      
      <input
        type="text"
        value={text}
        readOnly
        className={styles.input}
      />
      
      <button
        onClick={handleCopy}
        className={styles.button}
      >
        <IconRenderer name="clone" size="16px" />
      </button>

      <div className={`${styles.tooltip} ${copied ? styles.tooltipVisible : ''}`}>
        Copied!
      </div>
    </div>
  );
};

export default CopyToClipboard;
