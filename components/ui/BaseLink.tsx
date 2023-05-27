import Link from "next/link";
import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode | string[];
  link: string;
}

/** 基础链接按钮 */
const BaseLink = (props: ButtonProps) => {
  const { link, children } = props;

  return (
    <Link className={styles.btn} href={link}>
      {children}
    </Link>
  );
};

export default BaseLink;
