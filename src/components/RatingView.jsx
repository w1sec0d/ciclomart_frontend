import PropTypes from 'prop-types';
import StarRating from './StarRating';
import React, { useState } from 'react';


const RatingView = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className='w-full max-w-lg '>
      <p className='whitespace-normal break-words'>{props.description}</p>
      <p>{props.date}</p>
      <StarRating rating={props.rating} /> 

      {
        props.image && (
            <img 
              src = {props.image}
              alt = "Imagen de un producto"
              className='w-20 h-20 object-cover'
              onClick={handleImageClick}
            />  
        )
      }
      {isModalOpen && (
              <div className='fixed inset-0 flex items-center justify-center z-50'>
                <div className='absolute inset-0 bg-black opacity-70' onClick={handleCloseModal}></div>
                <div className='relative bg-white p-4 rounded-lg shadow-lg'>
                  <button 
                    onClick={handleCloseModal}
                    className='absolute top-0 right-0 mt-2 mr-2 text-white bg-red-600 rounded-full w-6 h-6 flex items-center justify-center'
                  >
                    X
                  </button>
                  <img 
                    src={props.image}
                    alt="Imagen de un producto ampliada"
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>
      )} 
    </div>
    
  );
};

RatingView.propTypes = {
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  image: PropTypes.string
};

export default RatingView;
