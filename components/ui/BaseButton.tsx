import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode | string[];
}

/** 基础按钮 */
const Button = (props: ButtonProps) => {
  const { children } = props;

  return <button className={styles.btn}>{children}</button>;
};

export default Button;
