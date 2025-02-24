import PropTypes from 'prop-types'
import StarRating from './StarRating'
import { useState } from 'react'

const RatingView = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleImageClick = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }
  return (
    <div className="w-full max-w-lg ">
      <p className="whitespace-normal break-words">{props.description}</p>
      <p>{props.date}</p>
      <StarRating rating={props.rating} />

      {props.image && (
        <img
          src={props.image}
          alt="Imagen de un producto"
          className="w-20 h-20 object-cover cursor-pointer"
          onClick={handleImageClick}
        />
      )}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black opacity-70"
            onClick={handleCloseModal}
          ></div>
          <div className="relative p-4 rounded-lg shadow-lg max-w-3xl max-h-full">
            <img
              src={props.image}
              alt="Imagen de un producto ampliada"
              className="w-full h-full object-contain max-h-[80vh] max-w-full"
            />
          </div>
        </div>
      )}
    </div>
  )
}

RatingView.propTypes = {
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  image: PropTypes.string,
}

export default RatingView
