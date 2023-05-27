import styles from "./EventSummary.module.css";

/** 活动概要 */
function EventSummary(props: { title: string }) {
  const { title } = props;

  return (
    <section className={styles.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default EventSummary;
