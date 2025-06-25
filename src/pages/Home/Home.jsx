import ShareHeader from "../../components/Header/ShareHeader";
import HeroSection from "../../components/Hero/HeroSection";
import TopLinks from "../../components/Links/TopLinks";
import SocialLinks from "../../components/Links/SocialLinks";
import FeaturedVideo from "../../components/Video/FeaturedVideo";
import Footer from "../../components/Footer/Footer";
import { featuredVideo } from "../../data/linksData";
import styles from "../../styles/Pages/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      {/* Background Pattern */}
      <div className={styles.backgroundPattern} />
      <div className={styles.backgroundOverlay} />
      
      {/* Share Header */}
      <ShareHeader />

      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.contentWrapper}>
          <HeroSection />
          <TopLinks />
          <SocialLinks />
          <FeaturedVideo video={featuredVideo} />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
