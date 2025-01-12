//-> Components
import SideBar from '../components/Profile/SideBar.jsx'
import Information from '../components/Profile/Information.jsx'
import Settings from '../components/Profile/Settings.jsx'

const Profile = () => {
  return (
    <section className="flex flex-row h-screen">
      {/* Side Bar */}
      <SideBar />
      {/* Main Content */}
      <div className="flex flex-col w-5/6 h-full">
        {/*General Information*/}
        <Information />

        {/*Settings*/}
        <Settings />
      </div>
    </section>
  )
}
export default Profile
