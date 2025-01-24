// -> Componentes
import ModalHeader from './ModalHeader'
import UserData from './UserData'

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
            <div className="grid grid-cols-3 ">
              {/*Display information in a grid system*/}
              {/* <div className="border-r border-b border-lgray ">
                <b className="pl-4 text-sm text-primary">Nombre:</b>
                <p className="pl-4">{nombre}</p>
              </div> */}

              <UserData title="Nombre:" dataItem={nombre} />
              <UserData title="Apellido:" dataItem={apellido} />
              <UserData className="border-l" title="Edad:" dataItem={edad} />
              <UserData title="Rol:" dataItem={rol} />
              <UserData title="Telefono:" dataItem={telefono} />
              <UserData title="Usuario:" dataItem={username} />
              <UserData
                className="col-span-3"
                title="Correo:"
                dataItem={correo}
              />
              <UserData
                className="col-span-3 border-b-0"
                title="Dirección:"
                dataItem={direccion}
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default InfoModal
