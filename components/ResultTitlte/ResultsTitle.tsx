import BaseLink from '../ui/BaseLink';
import classes from './ResultsTitle.module.css';

/** 展示所有活动提示 */
function ResultsTitle(props: {
  date: Date
}) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <BaseLink link='/events'>Show all events</BaseLink>
    </section>
  );
}

export default ResultsTitle;
