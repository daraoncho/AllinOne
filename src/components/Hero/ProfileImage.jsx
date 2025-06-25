import styles from "../../styles/Layout/ProfileImage.module.css";

const ProfileImage = ({ src, alt, size = "large", className = "" }) => {
  return (
    <div className={`${styles.container} ${styles[size]} ${className}`}>
      <img
        src={src}
        alt={alt}
        className={styles.image}
        loading="lazy"
      />
    </div>
  );
};

export default ProfileImage;
