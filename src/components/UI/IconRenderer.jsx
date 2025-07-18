import { 
  FaEnvelope, 
  FaInstagram, 
  FaYoutube, 
  FaGithub, 
  FaLinkedinIn,
  FaBook,
  FaBolt,
  FaLocationDot,
  FaShareNodes,
  FaClone,
  FaUserGroup,
  FaGamepad,
  FaCamera,
  FaPalette,
  FaPlay,
  FaVideo
} from 'react-icons/fa6';
import { FaTiktok, FaVimeoV } from 'react-icons/fa';
import { AiFillHome } from "react-icons/ai";

const iconMap = {
  mail: FaEnvelope,
  instagram: FaInstagram,
  youtube: FaYoutube,
  github: FaGithub,
  linkedin: FaLinkedinIn,
  tiktok: FaTiktok,
  home: AiFillHome,
  book: FaBook,
  bolt: FaBolt,
  location: FaLocationDot,
  share: FaShareNodes,
  clone: FaClone,
  // New icons
  userGroup: FaUserGroup,
  gamepad: FaGamepad,
  camera: FaCamera,
  palette: FaPalette,
  // Video icons
  play: FaPlay,
  video: FaVideo,
  vimeo: FaVimeoV
};

const IconRenderer = ({ name, className = "", size = "1em", ...props }) => {
  const IconComponent = iconMap[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return <IconComponent className={className} size={size} {...props} />;
};

export default IconRenderer;
