import { useState } from "react";
import IconRenderer from "../UI/IconRenderer";
import styles from "../../styles/Layout/FeaturedVideo.module.css";

const FeaturedVideo = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!video || !video.videoId) {
    return null;
  }

  const thumbnailUrl = `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`;

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Featured Video</h2>
        <p className={styles.subtitle}>Latest showcase</p>
      </div>

      <div className={styles.videoContainer}>
        {!isPlaying ? (
          <div className={styles.thumbnail} onClick={handlePlay}>
            <img
              src={thumbnailUrl}
              alt={video.title}
              className={styles.thumbnailImage}
            />
            <div className={styles.playOverlay}>
              <div className={styles.playButton}>
                <IconRenderer name="youtube" size="48px" />
              </div>
            </div>
            {video.duration && (
              <div className={styles.duration}>
                {video.duration}
              </div>
            )}
          </div>
        ) : (
          <iframe
            src={embedUrl}
            title={video.title}
            className={styles.iframe}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
        
        <div className={styles.videoInfo}>
          <h3 className={styles.videoTitle}>{video.title}</h3>
          <p className={styles.videoDescription}>{video.description}</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideo;
