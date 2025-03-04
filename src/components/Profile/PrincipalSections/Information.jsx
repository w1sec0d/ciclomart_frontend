//-> Utilidades
import { useSelector } from 'react-redux'

//-> Imagenes
import Photo from '../../../assets/userPhoto.png'

//-> Componentes
import ImageUpload from '../ImageUpload'
import Loading from '../../Loading'

const Information = () => {
  const authUser = useSelector((state) => state.auth.authUser)

  /*Verifica que exista el nombre del usuario */
  if (!authUser || !authUser.nombre) return <Loading />

  /*Formatea la fecha a dd/mm/aa y toma el primer nombre de usuario*/
  const firstName = authUser.nombre.split(' ')[0]
  const formattedDate = new Date(authUser.fechaRegistro).toLocaleDateString()

  /*Renderiza el componente teniendo en cuenta las constantes anteriores*/
  return (
    <div
      className="flex flex-col md:flex-row items-center mt-12 py-5 md:py-0 md:mt-8 md:mx-[170px] bg-lgray md:h-44 md:w-auto 
              md:rounded-l-[16rem]  md:rounded-r-[16rem] rounded-3xl shadow-lg md:pl-5 on w-full h-auto "
    >
      <ImageUpload defaultPhoto={Photo}></ImageUpload>
      <div className="flex flex-col items-center mt-2 lg:ml-[132px]">
        <b className="text-4xl">¡Hola, {firstName}!</b>
        <p className="md:text-2xl text-xl">{authUser.correo}</p>
        <p className="text-xl">Eres un ciclomáster</p>
        <p className="text-lg ">Te uniste el {formattedDate}</p>
      </div>
    </div>
  )
}

export default Information
