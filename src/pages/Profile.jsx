//-> Componentes
import SideBar from '../components/Profile/PrincipalSections/SideBar.jsx'
import Information from '../components/Profile/PrincipalSections/Information.jsx'
import Settings from '../components/Profile/PrincipalSections/Settings.jsx'

const Profile = () => {
  return (
    <section className="relative flex flex-row h-screen">
      {/* Side Bar */}
      <SideBar />
      {/* Main Content */}
      <div className="flex flex-col w-[80%] h-full">
        {/*General Information*/}
        <Information />

        {/*Settings*/}
        <Settings />
        <a href="https://auth.mercadopago.com/authorization?client_id=APP_ID&response_type=code&platform_id=mp&state=RANDOM_ID&redirect_uri=https://www.redirect-url.com">
          registrarme como vendedor
        </a>
      </div>
    </section>
  )
}
export default Profile
