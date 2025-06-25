import ProfileImage from "./ProfileImage";
import IconRenderer from "../UI/IconRenderer";
import { personalInfo } from "../../data/linksData";
import styles from "../../styles/Layout/HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.titleSection}>
        <h1 className={styles.mainTitle}>Links</h1>
        <h2 className={styles.subtitle}>View all my links</h2>
      </div>

      <div className={styles.imageContainer}>
        <ProfileImage 
          src={personalInfo.profileImage}
          alt={personalInfo.name}
          size="large"
        />
      </div>

      <h3 className={styles.name}>
        {personalInfo.name}
      </h3>

      {/* Added subtitle */}
      <p className={styles.jobTitle}>
        {personalInfo.subtitle}
      </p>

      <div className={styles.location}>
        <IconRenderer name="location" className={styles.locationIcon} />
        {personalInfo.location}
      </div>
    </section>
  );
};

export default HeroSection;
