import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({
  options,
  feedbackCategories,
  total,
  positivePercentage,
  firstLetterToUpperCase,
}) => (
  <>
    <ul>
      {feedbackCategories.map(item => {
        return (
          options[item] > 0 && (
            <li className={css.statisticsItem} key={item}>
              {firstLetterToUpperCase(item)}: {options[item]}
            </li>
          )
        );
      })}
      <li className={css.statisticsItem}>Total: {total}</li>
      <li className={css.statisticsItem}>
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  </>
);

Statistics.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  feedbackCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  firstLetterToUpperCase: PropTypes.func.isRequired,
};

export default Statistics;
