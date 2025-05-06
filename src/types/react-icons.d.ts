import { IconBaseProps as OriginalIconBaseProps } from "react-icons";

declare module "react-icons" {
  interface IconBaseProps extends OriginalIconBaseProps {
    className?: string;
  }
}

declare module "react-icons/fa" {
  export const FaMapMarkerAlt: React.FC<IconBaseProps>;
  export const FaPhone: React.FC<IconBaseProps>;
  export const FaEnvelope: React.FC<IconBaseProps>;
  export const FaClock: React.FC<IconBaseProps>;
  export const FaFacebook: React.FC<IconBaseProps>;
  export const FaTwitter: React.FC<IconBaseProps>;
  export const FaInstagram: React.FC<IconBaseProps>;
  export const FaLinkedin: React.FC<IconBaseProps>;
  export const FaWhatsapp: React.FC<IconBaseProps>;
  export const FaCode: React.FC<IconBaseProps>;
  export const FaMobile: React.FC<IconBaseProps>;
  export const FaPalette: React.FC<IconBaseProps>;
  export const FaBrain: React.FC<IconBaseProps>;
  export const FaLaptopCode: React.FC<IconBaseProps>;
  export const FaChevronDown: React.FC<IconBaseProps>;
}
