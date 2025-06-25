import Header from "../../components/Header/Header";
import HeroSection from "../../components/Hero/HeroSection";
import TopLinks from "../../components/Links/TopLinks";
import SocialLinks from "../../components/Links/SocialLinks";
import Footer from "../../components/Footer/Footer";
import styles from "../../styles/Pages/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      {/* Background Pattern */}
      <div className={styles.backgroundPattern} />
      <div className={styles.backgroundOverlay} />
      
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.contentWrapper}>
          <HeroSection />
          <TopLinks />
          <SocialLinks />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
