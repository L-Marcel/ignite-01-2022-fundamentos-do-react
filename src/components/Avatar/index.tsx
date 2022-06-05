import { ImgHTMLAttributes } from "react";
import styles from "./index.module.css";

interface PAvatar extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean
};

function Avatar({ src, hasBorder = true, ...rest }: PAvatar) {
  return (
    <img 
      className={`${styles.avatar} ${hasBorder? styles.hasBorder:""}`}
      src={src}
      {...rest}
    />
  );
};

export { Avatar };
