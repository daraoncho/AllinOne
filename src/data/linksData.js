import daraImage from "../assets/Images/dara.jpeg";
// Import your custom video
import customVideo from "../assets/video/Custom-Video.mp4";

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
    href: "YOUR_STUDYBUDDY_LINK_HERE",
    icon: "userGroup",
    bgColor: "studybuddy"
  },
  {
    id: "wordrush",
    title: "WordRush",
    description: "Fast-paced word puzzle game",
    href: "YOUR_WORDRUSH_LINK_HERE",
    icon: "gamepad",
    bgColor: "wordrush"
  },
  {
    id: "photobooth",
    title: "PhotoBooth",
    description: "Capture and edit memories",
    href: "YOUR_PHOTOBOOTH_LINK_HERE",
    icon: "camera",
    bgColor: "photobooth"
  },
  {
    id: "artgallery",
    title: "Art Gallery",
    description: "My creative digital artwork",
    href: "YOUR_ART_GALLERY_LINK_HERE",
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

// YouTube Video Configuration
// https://youtu.be/H0NFTIhxOpc?si=87tKSabHYQRWQJjy
export const featuredVideo = {
  id: "featured-video",
  title: "My Latest Project",
  description: "Check out my recent work and development process",
  platform: "youtube",
  videoId: "H0NFTIhxOpc",
  aspectRatio: "16:9"
};

// Alternative configurations (uncomment the one you want to test):

// Instagram Reel Configuration
/*
export const featuredVideo = {
  id: "featured-video",
  title: "Behind the Scenes",
  description: "Quick look at my development setup",
  platform: "instagram",
  url: "https://www.instagram.com/reel/DLFFsKQoci8/?igsh=cG5kZnBtMWk0N212",
  customThumbnail: "", // Optional: add a custom thumbnail
  aspectRatio: "9:16"
};
*/

// TikTok Video Configuration
/*
export const featuredVideo = {
  id: "featured-video",
  title: "Quick Dev Tips",
  description: "Fast coding tricks and shortcuts",
  platform: "tiktok",
  url: "https://vm.tiktok.com/ZMS9adeYj/",
  customThumbnail: "", // Optional: add a custom thumbnail
  aspectRatio: "9:16"
};
*/

// Custom Video Configuration

/*
export const featuredVideo = {
  id: "featured-video",
  title: "Project Demo",
  description: "Live demonstration of my latest application",
  platform: "custom",
  url: customVideo, // Using the imported video
  customThumbnail: "", // Optional: add a custom thumbnail
  aspectRatio: "16:9"
};
*/