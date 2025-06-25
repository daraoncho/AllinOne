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
  FaClone
} from 'react-icons/fa6';
import { FaTiktok } from 'react-icons/fa';
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
  clone: FaClone
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
