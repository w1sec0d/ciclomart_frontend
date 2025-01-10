const Profile = () => {
  return (
    <section className="flex flex-row h-screen">
      {/* Side Bar */}

      <div className="bg-lgray w-1/6 h-full">
        <ul>
          <li>Nombre: Juan Pérez</li>
          <li>Correo:</li>
        </ul>
      </div>

      {/* Information */}
      <div className="flex flex-col w-5/6 h-full">
        <div className="mt-8 mx-[45px] bg-lgray h-44 w-auto"></div>
        <div className="mt-8 mx-[45px] bg-lgray h-80 w-auto"></div>
      </div>
    </section>
  )
}
export default Profile
