import PropTypes from 'prop-types';
import StarRating from './StarRating';


const RatingView = (props) => {
  return (
    <div className='w-full max-w-lg'>
      <p className='whitespace-normal break-words'>{props.description}</p>
      <p>{props.date}</p>
      <StarRating rating={props.rating} />
    </div>
  );
};

RatingView.propTypes = {
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

export default RatingView;
