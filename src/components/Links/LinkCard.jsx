import IconRenderer from "../UI/IconRenderer";
import styles from "../../styles/Layout/LinkCard.module.css";

const LinkCard = ({ link, index }) => {
  return (
    <a
      href={link.href}
      className={styles.container}
      style={{ '--index': index, animationDelay: `${0.8 + index * 0.1}s` }}
    >
      <div className={`${styles.card} ${styles[link.bgColor]}`}>
        <div className={styles.iconContainer}>
          <IconRenderer 
            name={link.icon} 
            className={styles.icon}
          />
        </div>

        <div className={styles.content}>
          <h3 className={styles.title}>{link.title}</h3>
          <p className={styles.description}>{link.description}</p>
        </div>
      </div>
    </a>
  );
};

export default LinkCard;
