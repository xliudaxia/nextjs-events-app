import styles from "./LogisticsItem.module.css";

/** 活动信息Item */
function LogisticsItem(props: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  const { icon, children } = props;

  return (
    <li className={styles.item}>
      <span className={styles.icon}>
        {icon}
      </span>
      <span className={styles.content}>{children}</span>
    </li>
  );
}

export default LogisticsItem;
