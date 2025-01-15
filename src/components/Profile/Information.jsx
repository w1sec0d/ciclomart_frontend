//-> Utils
import { useState } from 'react'

//-> Images
import Photo from '../../assets/userPhoto.png'

const Information = () => {
  //Used to display a text when hover a photo
  const [hoverPhoto, setHoverPhoto] = useState(false)
  return (
    <div
      className="flex items-center mt-8 mx-[170px] bg-lgray h-44 w-auto 
              rounded-l-[16rem]  rounded-r-[16rem] shadow-sm pl-5 on"
    >
      <div className="flex relative h-5/6">
        <img
          src={Photo}
          className="h-full transition duration-200 ease-in-out hover:scale-110 hover:opacity-80 hover:cursor-pointer"
          onMouseEnter={() => setHoverPhoto(true)}
          onMouseOut={() => setHoverPhoto(false)}
        />
        {hoverPhoto ? (
          <b className="pointer-events-none absolute top-1/2 left-1/2 text-lg -translate-x-1/2 -translate-y-1/2 ">
            Editar
          </b>
        ) : null}
      </div>
      <div className="flex flex-col items-center lg:ml-[132px]">
        <b className="text-4xl">¡Hola Usuario!</b>
        <p className="text-2xl">usuario@correo.com</p>
        <p className="text-xl">Eres un ciclomáster</p>
        <p className="text-lg">Te uniste el 20/10/24</p>
      </div>
    </div>
  )
}

export default Information
