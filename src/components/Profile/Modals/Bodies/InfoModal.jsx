// -> Componentes
import UserData from '../UserData'

const InfoModal = ({ data }) => {
  const { nombre, apellido, edad, rol, telefono, username, correo, direccion } =
    data

  return (
    <>
      {data.length != 0 ? (
        <div className="border-b border-lgray h-[272px] overflow-auto">
          <div className="grid grid-cols-3 ">
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
    </>
  )
}

export default InfoModal
