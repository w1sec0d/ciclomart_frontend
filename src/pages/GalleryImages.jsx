import React from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import { PedalBike } from '@mui/icons-material'

const GalleryImages = ({ imageProduct, imagePropertyCard }) => {
  const images = []

  // const DefaultImage= [
  //   {
  //     original:
  //   }
  // ]

  //Verifica si existe imagen de producto y actualiza
  if (imageProduct) {
    images.push({
      original: `${imageProduct.replace('/upload/', '/upload/c_scale,w_800/')}`,
      thumbnail: `${imageProduct.replace('/upload/', '/upload/c_scale,w_200/')}`,
    })
  } else {
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
    <div>
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
      {!imageProduct && (
        <div className="flex justify-center items-center">
          <div
            style={{
              width: '800px',
              height: '350px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <PedalBike sx={{ fontSize: 300 }} color="disabled" />
          </div>
        </div>
      )}
    </div>
  )
}

export default GalleryImages
