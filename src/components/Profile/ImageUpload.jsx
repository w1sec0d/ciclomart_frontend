import React, { useState, useRef } from 'react'
import axios from 'axios'

const ImageUpload = ({ onUploadSuccess, defaultPhoto }) => {
  const [hoverPhoto, setHoverPhoto] = useState(false)
  const [image, setImage] = useState(null)
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const fileInputRef = useRef(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file && file.type.startsWith('image/')) {
      setImage(file)
      setError('')
    } else {
      setError('Please select a valid image file')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!image) {
      setError('Please select an image to upload')
      return
    }

    const formData = new FormData()
    formData.append('file', image)
    formData.append('upload_preset', 'ciclomart') // Reemplaza con tu upload preset de Cloudinary

    setLoading(true)
    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/drfmpnhaz/image/upload', // Reemplaza con tu cloud name
        formData
      )
      setUrl(response.data.secure_url)
      setLoading(false)
      onUploadSuccess(response.data.secure_url)
    } catch (error) {
      console.error('Error subiendo la imagen:', error)
      setError('Error uploading the image')
      setLoading(false)
    }
  }

  return (
    <div className="h-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center h-full"
      >
        <div
          className="bg-gray-200 rounded cursor-pointer h-full "
          onClick={() => fileInputRef.current.click()}
        >
          {image ? (
            <div className="flex relative h-full items-center ml-4">
              <img
                src={URL.createObjectURL(image)}
                className="transition duration-200 ease-in-out hover:scale-110 hover:opacity-80 hover:cursor-pointer w-36 h-36 rounded-full"
                onMouseEnter={() => setHoverPhoto(true)}
                onMouseOut={() => setHoverPhoto(false)}
              />
              {hoverPhoto ? (
                <b className="pointer-events-none absolute top-1/2 left-1/2 text-lg -translate-x-1/2 -translate-y-1/2">
                  Editar
                </b>
              ) : null}
            </div>
          ) : (
            <div className="flex relative h-full items-center ml-4">
              <img
                src={defaultPhoto}
                className="transition duration-200 ease-in-out hover:scale-110 hover:opacity-80 hover:cursor-pointer w-36 h-36 rounded-full"
                onMouseEnter={() => setHoverPhoto(true)}
                onMouseOut={() => setHoverPhoto(false)}
              />
              {hoverPhoto ? (
                <b className="pointer-events-none absolute top-1/2 left-1/2 text-lg -translate-x-1/2 -translate-y-1/2">
                  Editar
                </b>
              ) : null}
            </div>
          )}
        </div>
        <input
          type="file"
          onChange={handleImageChange}
          ref={fileInputRef}
          style={{ display: 'none' }}
        />
        {/* <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50 mt-4"
          disabled={loading}
        >
          {loading ? 'Uploading...' : 'Subir Imagen'}
        </button> */}
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {url && <img src={url} alt="Uploaded" className="mt-4" />}
    </div>
  )
}

export default ImageUpload
