const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'
import { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { getUserPhoto, updateUserPhoto } from '../../services/userService'
import { useTranslation } from 'react-i18next'

const ImageUpload = ({ defaultPhoto }) => {
  const { t } = useTranslation()
  const authUser = useSelector((state) => state.auth.authUser)
  const [photo, setPhoto] = useState('')
  const [hoverPhoto, setHoverPhoto] = useState(false)
  const [image, setImage] = useState(null)
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const fileInputRef = useRef(null)

  const handleImageChange = async (e) => {
    const file = e.target.files[0]
    if (file && file.type.startsWith('image/')) {
      setImage(file)
      setError('')

      // Auto-upload the image
      const formData = new FormData()
      formData.append('file', file)
      formData.append('upload_preset', 'ciclomart')
      setLoading(true)

      try {
        const response = await axios.post(
          'https://api.cloudinary.com/v1_1/drfmpnhaz/image/upload',
          formData
        )
        const photoUrl = response.data.secure_url
        await updateUserPhoto(photoUrl, authUser.idUsuario)
        setUrl(photoUrl)
        setPhoto({ photoUrl })
        setImage(null) // Reset the image state after successful upload
      } catch (error) {
        console.error('Error uploading the image:', error)
        setError(t('profile.errorUploadingImage'))
      } finally {
        setLoading(false)
        setImage(null)
      }
    } else {
      setError(t('profile.selectValidImage'))
    }
  }

  useEffect(() => {
    const fetchUserPhoto = async () => {
      try {
        const photo = await getUserPhoto(authUser.idUsuario)
        setPhoto({ photoUrl: photo.results.photoUrl })
      } catch (error) {
        console.error('Error fetching user photo:', error)
      }
    }

    if (authUser && authUser.idUsuario) {
      fetchUserPhoto()
    }
  }, [authUser, url]) // Add authUser and url as dependencies

  return (
    <div className="h-full w-[50%]">
      <div className="flex flex-row items-center justify-center h-full w-full">
        <div
          className="bg-gray-200 rounded cursor-pointer h-full"
          onClick={() => !loading && fileInputRef.current.click()}
        >
          <div className="flex relative h-full items-center ml-4">
            <img
              src={photo.photoUrl || defaultPhoto}
              className="transition duration-200 ease-in-out hover:scale-110 hover:opacity-80 hover:cursor-pointer w-36 h-36 rounded-full"
              onMouseEnter={() => setHoverPhoto(true)}
              onMouseOut={() => setHoverPhoto(false)}
            />
            {loading ? (
              <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 rounded-full w-36 h-36 flex items-center justify-center">
                <span className="text-white font-bold">
                  {t('profile.uploading')}...
                </span>
              </div>
            ) : hoverPhoto ? (
              <b className="pointer-events-none absolute top-1/2 left-1/2 text-lg -translate-x-1/2 -translate-y-1/2">
                {t('profile.edit')}
              </b>
            ) : null}
          </div>
        </div>
        <input
          type="file"
          onChange={handleImageChange}
          ref={fileInputRef}
          style={{ display: 'none' }}
          accept="image/*"
        />
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  )
}

export default ImageUpload
