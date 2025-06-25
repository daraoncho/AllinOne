import LinkCard from "./LinkCard";
import { mainLinks } from "../../data/linksData";
import styles from "../../styles/Layout/SocialLinks.module.css";

const SocialLinks = () => {
  return (
    <section className={styles.container}>
      {mainLinks.map((link, index) => (
        <LinkCard key={link.id} link={link} index={index} />
      ))}
    </section>
  );
};

export default SocialLinks;
