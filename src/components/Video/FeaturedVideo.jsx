import { useState } from "react";
import IconRenderer from "../UI/IconRenderer";
import styles from "../../styles/Layout/FeaturedVideo.module.css";

const FeaturedVideo = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [videoError, setVideoError] = useState(false);

  if (!video || (!video.videoId && !video.url)) {
    return null;
  }

  // Generate platform-specific data
  const getVideoData = () => {
    switch (video.platform) {
      case "youtube":
        return {
          thumbnailUrl: video.customThumbnail || `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`,
          embedUrl: `https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`,
          platformIcon: "youtube",
          platformColor: "#ff0000"
        };
      
      case "vimeo":
        return {
          thumbnailUrl: video.customThumbnail || `https://vumbnail.com/${video.videoId}.jpg`,
          embedUrl: `https://player.vimeo.com/video/${video.videoId}?autoplay=1`,
          platformIcon: "vimeo",
          platformColor: "#1ab7ea"
        };
      
      case "tiktok":
        return {
          thumbnailUrl: video.customThumbnail || "/images/tiktok-placeholder.jpg",
          embedUrl: null,
          externalUrl: video.url,
          platformIcon: "tiktok",
          platformColor: "#000000"
        };
      
      case "instagram":
        return {
          thumbnailUrl: video.customThumbnail || "/images/instagram-placeholder.jpg",
          embedUrl: null,
          externalUrl: video.url,
          platformIcon: "instagram",
          platformColor: "#e4405f"
        };
      
      case "custom":
        return {
          thumbnailUrl: video.customThumbnail || "/images/video-placeholder.jpg",
          embedUrl: null,
          videoUrl: video.url,
          platformIcon: "video",
          platformColor: "#6366f1"
        };
      
      default:
        return {
          thumbnailUrl: video.customThumbnail || "/images/video-placeholder.jpg",
          embedUrl: null,
          externalUrl: video.url,
          platformIcon: "play",
          platformColor: "#6366f1"
        };
    }
  };

  const videoData = getVideoData();

  const handlePlay = () => {
    if (videoData.externalUrl) {
      window.open(videoData.externalUrl, '_blank', 'noopener,noreferrer');
    } else if (videoData.videoUrl) {
      console.log('Playing custom video:', videoData.videoUrl); // Debug log
      setIsPlaying(true);
    } else if (videoData.embedUrl) {
      setIsPlaying(true);
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const handleVideoError = (e) => {
    console.error('Video error:', e);
    setVideoError(true);
  };

  const handleVideoLoad = () => {
    console.log('Video loaded successfully');
    setVideoError(false);
  };

  const getAspectRatioClass = () => {
    switch (video.aspectRatio) {
      case "9:16":
        return styles.aspectRatioVertical;
      case "1:1":
        return styles.aspectRatioSquare;
      default:
        return styles.aspectRatioWidescreen;
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Featured Video</h2>
        <p className={styles.subtitle}>Latest showcase</p>
      </div>

      <div className={styles.videoContainer}>
        {!isPlaying || (!videoData.embedUrl && !videoData.videoUrl) ? (
          <div 
            className={`${styles.thumbnail} ${getAspectRatioClass()}`} 
            onClick={handlePlay}
            data-platform={video.platform}
          >
            {imageError ? (
              <div className={styles.placeholderThumbnail}>
                <IconRenderer name={videoData.platformIcon} size="64px" />
                <span>Video Thumbnail</span>
              </div>
            ) : (
              <img
                src={videoData.thumbnailUrl}
                alt={video.title}
                className={styles.thumbnailImage}
                onError={handleImageError}
              />
            )}
            
            <div className={styles.playOverlay}>
              <div 
                className={styles.playButton}
                style={{ backgroundColor: videoData.platformColor }}
              >
                <IconRenderer name={videoData.platformIcon} size="32px" />
              </div>
            </div>

            <div className={styles.platformBadge}>
              <IconRenderer name={videoData.platformIcon} size="16px" />
              <span>{video.platform.toUpperCase()}</span>
            </div>

            {video.duration && (
              <div className={styles.duration}>
                {video.duration}
              </div>
            )}
          </div>
        ) : (
          <div className={getAspectRatioClass()}>
            {video.platform === "custom" ? (
              videoError ? (
                <div className={styles.videoError}>
                  <IconRenderer name="video" size="48px" />
                  <p>Unable to load video</p>
                  <p>Video URL: {videoData.videoUrl}</p>
                </div>
              ) : (
                <video
                  src={videoData.videoUrl}
                  className={styles.customVideo}
                  controls
                  playsInline
                  onError={handleVideoError}
                  onLoadedData={handleVideoLoad}
                  onCanPlay={handleVideoLoad}
                >
                  Your browser does not support the video tag.
                </video>
              )
            ) : (
              <iframe
                src={videoData.embedUrl}
                title={video.title}
                className={styles.iframe}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
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
