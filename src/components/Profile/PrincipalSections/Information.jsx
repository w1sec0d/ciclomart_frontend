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
      className="flex items-center mt-8 mx-[170px] bg-lgray h-44 w-auto 
              rounded-l-[16rem]  rounded-r-[16rem] shadow-sm pl-5 on"
    >
      <ImageUpload defaultPhoto={Photo}></ImageUpload>
      <div className="flex flex-col items-center lg:ml-[132px]">
        <b className="text-4xl">¡Hola, {firstName}!</b>
        <p className="text-2xl">{authUser.correo}</p>
        <p className="text-xl">Eres un ciclomáster</p>
        <p className="text-lg ">Te uniste el {formattedDate}</p>
      </div>
    </div>
  )
}

export default Information
