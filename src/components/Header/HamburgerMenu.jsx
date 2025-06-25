import { useEffect } from "react";
import IconRenderer from "../UI/IconRenderer";
import TypewriterText from "../UI/TypewriterText";
import CopyToClipboard from "../UI/CopyToClipboard";
import { personalInfo, mainLinks } from "../../data/linksData";
import styles from "../../styles/Layout/HamburgerMenu.module.css";

const HamburgerMenu = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className={styles.backdrop} onClick={onClose} />
      
      <div className={styles.menu}>
        <div className={styles.profileSection}>
          <div className={styles.profileImage}>
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
            />
          </div>
          <h3 className={styles.profileTitle}>
            Share @{personalInfo.name} | Links
          </h3>
        </div>

        <div className={styles.copySection}>
          <CopyToClipboard text={personalInfo.websiteUrl} />
        </div>

        <div className={styles.menuLinks}>
          <a href="#" className={styles.menuLink}>
            .....
          </a>
          
          {mainLinks.slice(3, 4).map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={styles.menuLink}
            >
              {link.title}
            </a>
          ))}
        </div>

        <div className={styles.typewriterSection}>
          <TypewriterText texts={personalInfo.description} />
        </div>

        <button
          onClick={onClose}
          className={styles.closeButton}
        >
          Close
        </button>
      </div>
    </>
  );
};

export default HamburgerMenu;
