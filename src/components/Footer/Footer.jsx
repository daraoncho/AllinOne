import styles from "../../styles/Layout/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.mainText}>Built and designed by Dara.</p>
      <p className={styles.copyright}>All Rights Reserved &copy;</p>
    </footer>
  );
};

export default Footer;
