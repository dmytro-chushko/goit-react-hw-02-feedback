import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({
  feedbackCategories,
  onLeaveFeedback,
  firstLetterToUpperCase,
}) => (
  <div className={css.buttonsContainer}>
    {feedbackCategories.map(item => (
      <button
        className={css.categoryButton}
        type="button"
        key={item}
        name={item}
        onClick={onLeaveFeedback}
      >
        {firstLetterToUpperCase(item)}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  feedbackCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  firstLetterToUpperCase: PropTypes.func.isRequired,
};

export default FeedbackOptions;
