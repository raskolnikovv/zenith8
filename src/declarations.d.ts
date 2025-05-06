declare module "react";
declare module "react-dom";
declare module "framer-motion";
declare module "react-router-dom";
declare module "react-icons/*" {
  import React from "react";
  interface IconBaseProps {
    className?: string;
    size?: string | number;
    color?: string;
    style?: React.CSSProperties;
  }
  export const IconContext: React.Context<IconBaseProps>;
  export function IconBase(
    props: IconBaseProps & Record<string, unknown>
  ): JSX.Element;
  export function GenIcon(
    data: Record<string, unknown>
  ): (props: IconBaseProps) => JSX.Element;
}
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.gif";
declare module "@emailjs/browser";
