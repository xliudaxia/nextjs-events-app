import styles from "./ErrorAlert.module.css";

/** 错误提示 */
function ErrorAlert(props: { children: React.ReactNode }) {
  return <div className={styles.alert}>{props.children}</div>;
}

export default ErrorAlert;
