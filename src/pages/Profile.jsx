// Components
import SideBar from '../components/Profile/PrincipalSections/SideBar.jsx'
import Information from '../components/Profile/PrincipalSections/Information.jsx'
import Settings from '../components/Profile/PrincipalSections/Settings.jsx'
import { useTranslation } from 'react-i18next'

// Icons
import ShoppingCart from '@mui/icons-material/ShoppingCart'
import Reviews from '@mui/icons-material/Reviews'
import Button from '../components/Button'

const Profile = () => {
  const { t } = useTranslation()
  return (
    <section className="relative flex flex-row min-h-screen">
      {/* Sidebar */}
      <SideBar />
      {/* Main content */}
      <div className="flex flex-col lg:flex-row w-full h-full justify-center items-center transition-width duration-300 flex-wrap gap-6 my-auto -translate-y-6">
        {/* General information */}
        <div className="flex flex-col w-[40%] justify-center gap-4 my-6">
          <Information />
          <div className="flex flex-row gap-6 items-center justify-center">
            <Button>
              <ShoppingCart className="mr-2" />
              {t('profile.myPurchases')}
            </Button>
            <Button>
              <Reviews className="mr-2" />
              {t('profile.myReviews')}
            </Button>
          </div>
        </div>
        {/* Settings */}
        <Settings />
        {/* Purchases and reviews buttons */}
      </div>
    </section>
  )
}
export default Profile
