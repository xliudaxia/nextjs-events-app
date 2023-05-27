import styles from './EventContent.module.css';

/** 活动内容 */
function EventContent(props: {
  children: React.ReactElement| string[];
}) {
  return (
    <section className={styles.content}>
      {props.children}
    </section>
  );
}

export default EventContent;
