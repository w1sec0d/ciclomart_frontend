import PropTypes from 'prop-types'
import '../style/start.css'

const StarRating = ({ rating, size = 'start' }) => {
  // Limita la calificación a un máximo de 5

  rating = Math.min(rating, 5)

  const stars = []
  for (let i = 0; i < 5; i++) {
    let starClass = `star ${size}`
    if (rating > i) {
      starClass += ' rated'
      if (rating < i + 1) {
        starClass += ' partial'
        const percentage = ((rating - i) * 100).toFixed(1)
        stars.push(
          <span
            key={i}
            className={starClass}
            style={{ '--fill': `${percentage}%` }}
          >
            ★
          </span>
        )
        continue
      }
    }
    stars.push(
      <span key={i} className={starClass}>
        ★
      </span>
    )
  }
  return <div>{stars}</div>
}

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  size: PropTypes.string,
}

export default StarRating
