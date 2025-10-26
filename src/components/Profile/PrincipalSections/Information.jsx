// Utils
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

// Images
import Photo from '../../../assets/userPhoto.png'

// Components
import ImageUpload from '../ImageUpload'
import Loading from '../../Loading'

const Information = () => {
  const { t } = useTranslation()
  const authUser = useSelector((state) => state.auth.authUser)

  // Verify that user name exists
  if (!authUser || !authUser.nombre) return <Loading />

  // Format date to locale format and get first name
  const firstName = authUser.nombre.split(' ')[0]
  const formattedDate = new Date(authUser.fechaRegistro).toLocaleDateString()

  // Render component with the above constants
  return (
    <div
      className="flex flex-col md:flex-row items-center mt-12 py-5 md:py-0 md:mt-8 md:mx-[170px] bg-lgray md:h-44 md:w-auto 
              md:rounded-l-[16rem]  md:rounded-r-[16rem] rounded-3xl shadow-lg md:pl-5 on w-full h-auto "
    >
      <ImageUpload defaultPhoto={Photo}></ImageUpload>
      <div className="flex flex-col items-center mt-2 lg:ml-[132px]">
        <b className="text-4xl">{t('profile.hello', { name: firstName })}</b>
        <p className="md:text-2xl text-xl">{authUser.correo}</p>
        <p className="text-xl">{t('profile.youAreACyclist')}</p>
        <p className="text-lg ">
          {t('profile.joinedOn', { date: formattedDate })}
        </p>
      </div>
    </div>
  )
}

export default Information
