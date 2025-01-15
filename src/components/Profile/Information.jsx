//-> Utils
import { useState } from 'react'

//-> Images
import Photo from '../../assets/userPhoto.png'

//->Components
import ImageUpload from './ImageUpload'

const Information = () => {
  return (
    <div
      className="flex items-center mt-8 mx-[170px] bg-lgray h-44 w-auto 
              rounded-l-[16rem]  rounded-r-[16rem] shadow-sm pl-5 on"
    >
      <ImageUpload defaultPhoto={Photo}></ImageUpload>
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
