export const detectVideoPlatform = (url) => {
  if (!url) return null;
  
  // YouTube detection
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    const videoId = extractYouTubeId(url);
    return { platform: 'youtube', videoId };
  }
  
  // Vimeo detection
  if (url.includes('vimeo.com')) {
    const videoId = extractVimeoId(url);
    return { platform: 'vimeo', videoId };
  }
  
  // TikTok detection
  if (url.includes('tiktok.com')) {
    return { platform: 'tiktok', url };
  }
  
  // Instagram detection
  if (url.includes('instagram.com')) {
    return { platform: 'instagram', url };
  }
  
  // Custom video file detection
  if (url.match(/\.(mp4|webm|ogg|mov)$/i)) {
    return { platform: 'custom', url };
  }
  
  return { platform: 'unknown', url };
};

export const extractYouTubeId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

export const extractVimeoId = (url) => {
  const regExp = /(?:vimeo)\.com.*(?:videos|video|channels|)\/([\d]+)/i;
  const match = url.match(regExp);
  return match ? match[1] : null;
};

export const getOptimalThumbnail = (platform, videoId, customThumbnail) => {
  if (customThumbnail) return customThumbnail;
  
  switch (platform) {
    case 'youtube':
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    case 'vimeo':
      return `https://vumbnail.com/${videoId}.jpg`;
    default:
      return '/images/video-placeholder.jpg';
  }
};
