import { useShare } from "../../hooks/useShare";
import IconRenderer from "../UI/IconRenderer";
import { personalInfo } from "../../data/linksData";
import styles from "../../styles/Layout/ShareHeader.module.css";

const ShareHeader = () => {
  const { share, canShare } = useShare();

  const handleShare = () => {
    share({
      title: `${personalInfo.name} | Links`,
      text: `Check out ${personalInfo.fullName}'s links`,
      url: personalInfo.websiteUrl
    });
  };

  return (
    <header className={styles.header}>
      <button
        onClick={handleShare}
        className={styles.shareButton}
        aria-label="Share this page"
      >
        <IconRenderer name="share" size="20px" />
      </button>
    </header>
  );
};

export default ShareHeader;
