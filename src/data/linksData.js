import daraImage from "../assets/Images/dara.jpeg";

export const personalInfo = {
  name: "Dara",
  fullName: "Adebayo Oluwadarasimi",
  subtitle: "Software Engineer",
  location: "Nigeria",
  profileImage: daraImage,
  description: [
    "Hi, i'm Adebayo Oluwadarasimi,",
    "a high-distinction Computer Science Graduate from Ekiti State University",
    "founder of HashTag.",
  ],
  websiteUrl: "https://dara-links.netlify.app",
};

export const topSocialLinks = [
  {
    id: "email",
    href: "mailto:adebayooluwadarasimi1@gmail.com",
    icon: "mail",
    label: "Email",
  },
  {
    id: "tiktok",
    href: "https://www.tiktok.com/@daraoncho",
    icon: "tiktok",
    label: "TikTok",
  },
  {
    id: "github",
    href: "https://github.com/daraoncho",
    icon: "github",
    label: "GitHub",
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/me/",
    icon: "linkedin",
    label: "LinkedIn",
  },
];

export const mainLinks = [
  {
    id: "instagram",
    title: "Instagram",
    description: "cool stuffs",
    href: "https://www.instagram.com/daraoncho",
    icon: "instagram",
    bgColor: "instagram",
  },
  {
    id: "youtube",
    title: "Youtube",
    description: "longer vlogs",
    href: "https://www.youtube.com/channel/UCF0azJUVy3xkSdsCCA_p3eA",
    icon: "youtube",
    bgColor: "youtube",
  },
  {
    id: "portfolio",
    title: "Dara",
    description: "portfolio Website",
    href: "https://daraa.netlify.app",
    icon: "home",
    bgColor: "portfolio",
  },
  {
    id: "blog",
    title: "Dara | Blog",
    description: "my thoughts and articles",
    href: "https://dara-bloggy.netlify.app/",
    icon: "book",
    bgColor: "blog",
  },
  {
    id: "studybuddy",
    title: "StudyBuddy",
    description: "Learn together, grow together",
    href: "YOUR_STUDYBUDDY_LINK_HERE", // Replace with your link
    icon: "userGroup",
    bgColor: "studybuddy"
  },
  {
    id: "wordrush",
    title: "WordRush",
    description: "Fast-paced word puzzle game",
    href: "YOUR_WORDRUSH_LINK_HERE", // Replace with your link
    icon: "gamepad",
    bgColor: "wordrush"
  },
  {
    id: "photobooth",
    title: "PhotoBooth",
    description: "Capture and edit memories",
    href: "YOUR_PHOTOBOOTH_LINK_HERE", // Replace with your link
    icon: "camera",
    bgColor: "photobooth"
  },
  {
    id: "artgallery",
    title: "Art Gallery",
    description: "My creative digital artwork",
    href: "YOUR_ART_GALLERY_LINK_HERE", // Replace with your link
    icon: "palette",
    bgColor: "artgallery"
  },
  {
    id: "random",
    title: "Stay Disciplined",
    description: "coming soon",
    href: "#",
    icon: "bolt",
    bgColor: "random"
  }
];

// New featured video data
export const featuredVideo = {
  id: "featured-video",
  title: "Latest Project Showcase",
  description: "Watch my latest work and projects in action",
  videoId: "YOUR_YOUTUBE_VIDEO_ID", // Replace with actual YouTube video ID
  thumbnail: "https://img.youtube.com/vi/YOUR_YOUTUBE_VIDEO_ID/maxresdefault.jpg", // Will be auto-generated
  duration: "5:30" // Optional: video duration
};
