import PropTypes from 'prop-types';
import "../style/start.css"

const RatingView = (props) => {
    
    const StarRating = ({rating}) => {
        
        // Limita la calificación a un máximo de 5
        rating = Math.min(rating, 5);
        
        const stars = [];
        for (let i = 0; i < 5; i++) {
          let starClass = 'star';
          if (rating > i) {
            starClass += ' rated';
            if (rating < i+1) {
              starClass += ' partial';
              const percentage = ((rating - i) * 100).toFixed(1);
              stars.push(<span key={i} className={starClass} style={{'--fill': `${percentage}%`}}>★</span>);
              continue;
            }
          }
          stars.push(<span key={i} className={starClass}>★</span>);
        }
        return <div>{stars}</div>;
      };



  return (
    <div className="ContenedorCalificaciones">
      <p>{props.description}</p>
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
