import IconRenderer from "../UI/IconRenderer";
import { topSocialLinks } from "../../data/linksData";
import styles from "../../styles/Layout/TopLinks.module.css";

const TopLinks = () => {
  return (
    <div className={styles.container}>
      {topSocialLinks.map((link, index) => (
        <a
          key={link.id}
          href={link.href}
          className={styles.link}
          style={{ '--index': index }}
          aria-label={link.label}
        >
          <IconRenderer 
            name={link.icon} 
            className={styles.icon}
          />
        </a>
      ))}
    </div>
  );
};

export default TopLinks;
