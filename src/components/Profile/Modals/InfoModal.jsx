// -> Componentes
import ModalHeader from './ModalHeader'

const InfoModal = ({ data, onClose }) => {
  const { nombre, apellido, edad, rol, telefono, username, correo, direccion } =
    data
  return (
    <div
      className="flex items-center justify-center absolute inset-0 left-0 h-full w-full z-10 bg-gray/60 "
      onClick={onClose}
    >
      <div
        className="w-[800px] h-[400px] bg-white  rounded-3xl -translate-y-8 shadow-2xl z-20 mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/*Componente que muestra el titulo y permite cerrar el modal*/}
        <ModalHeader title="Información Personal" onClose={onClose} />

        {data.length != 0 ? (
          <div className="border-b border-lgray h-[272px] overflow-auto">
            <div className="grid grid-cols-3">
              {/*Display information in a grid system*/}
              <div className="pt-2 border-r h-[67px] border-b border-lgray ">
                <b className="pl-4 text-sm text-primary">Nombre:</b>
                <p className="pl-4">{nombre}</p>
              </div>
              <div className="pt-2 h-[67px] border-b border-lgray ">
                <b className="pl-4 text-sm text-primary">Apellido:</b>
                <p className="pl-4">{apellido}</p>
              </div>
              <div className="pt-2 h-[67px] border-b border-l border-lgray ">
                <b className="pl-4 pt-0 text-sm text-primary">Edad:</b>
                <p className="pl-4">{edad}</p>
              </div>
              <div className="pt-2 h-[67px] border-b border-r border-lgray ">
                <b className="pl-4 pt-0 text-sm text-primary">Rol:</b>
                <p className="pl-4">{rol}</p>
              </div>
              <div className="pt-2 h-[67px] border-b border-r border-lgray ">
                <b className="pl-4 pt-0 text-sm text-primary">Telefono:</b>
                <p className="pl-4">{telefono}</p>
              </div>
              <div className="pt-2 h-[67px] border-b  border-lgray ">
                <b className="pl-4 pt-0 text-sm text-primary">Usuario:</b>
                <p className="pl-4">{username}</p>
              </div>
              <div className="pt-2 col-span-3 h-[67px] border-b  border-lgray ">
                <b className="pl-4 pt-0 text-sm text-primary">Correo:</b>
                <p className="pl-4">{correo}</p>
              </div>
              <div className="pt-2 col-span-3 h-[67px] border-r border-lgray ">
                <b className="pl-4 pt-0 text-sm text-primary">Dirección:</b>
                <p className="pl-4">{direccion}</p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default InfoModal
