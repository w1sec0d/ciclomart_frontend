import React from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

const GalleryImages = ({ imageProduct, imagePropertyCard }) => {
  const images = []

  //Verifica si existe imagen de producto y actualiza
  if (imageProduct) {
    images.push({
      original: `${imageProduct.replace('/upload/', '/upload/c_scale,w_800/')}`,
      thumbnail: `${imageProduct.replace('/upload/', '/upload/c_scale,w_200/')}`,
    })
  }

  //Verifica si exsite tarjeta de propiedad y actualiza images
  if (imagePropertyCard) {
    images.push({
      original: `${imagePropertyCard.replace('/upload/', '/upload/c_scale,w_800/')}`,
      thumbnail: `${imagePropertyCard.replace('/upload/', '/upload/c_scale,w_200/')}`,
    })
  }

  return (
    //Se muestran las imágenes
    <ImageGallery
      items={images}
      thumbnailPosition="left"
      slideOnThumbnailOver={true}
      showFullscreenButton={false}
      showNav={true}
      slideDuration={0}
      showPlayButton={false}
      disableSwipe={false}
    />
  )
}

export default GalleryImages
