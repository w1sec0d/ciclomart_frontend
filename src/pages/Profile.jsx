// Components
import SideBar from '../components/Profile/PrincipalSections/SideBar.jsx'
import Information from '../components/Profile/PrincipalSections/Information.jsx'
import Settings from '../components/Profile/PrincipalSections/Settings.jsx'

// TODO: Fix alignment issues
const Profile = () => {
  return (
    <section className="relative flex flex-row h-screen">
      {/* Sidebar */}
      <SideBar />
      {/* Main content */}
      <div className="flex flex-col w-full h-full transition-width duration-300 px-6 md:0">
        {/* General information */}
        <Information />
        {/* Settings */}
        <Settings />
      </div>
    </section>
  )
}
export default Profile
