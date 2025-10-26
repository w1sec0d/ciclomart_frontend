// Components
import CardButton from '../CardButton.jsx'
import ShowDataList from '../ShowDataList.jsx'

// Icons
import ShoppingBag from '@mui/icons-material/LocalMallOutlined'
import Store from '@mui/icons-material/StorefrontOutlined'
import Tag from '@mui/icons-material/LocalOfferOutlined'
import { MdOutlineReviews } from 'react-icons/md'
import MenuIcon from '@mui/icons-material/Menu'

// Images
import Logo from '../../../assets/logoVector.svg'

// Utils & Services
import apiService from '../../../services/apiService.js'
import { getSales, getPurchases } from '../../../services/userService.js'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const SideBar = () => {
  const { t } = useTranslation()

  // Global state for logged-in user
  const authUser = useSelector((state) => state.auth.authUser)

  // State to manage which section is shown
  const [activeButton, setActiveButton] = useState(0)
  const [purchaseData, setPurchaseData] = useState([])
  const [salesData, setSalesData] = useState([])
  const [storesData, setStoresData] = useState([])
  const [isSidebarOpen, setIsSidebarOpen] = useState(false) // State to control sidebar visibility

  // Navigate to reviews page
  const navigate = useNavigate()

  // indexSection1 = Purchases, indexSection2 = Sales, indexSection3 = Stores
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const purchaseData = await getPurchases(authUser.idUsuario)
        const salesData = await getSales(authUser.idUsuario)
        const storesData = await apiService.getStores()
        setPurchaseData(purchaseData.results)
        setSalesData(salesData.results)
        setStoresData(storesData.results)
      } catch (error) {
        console.error('Error fetching sidebar data', error)
      }
    }

    if (authUser && authUser.idUsuario) {
      fetchInitialData()
    }
  }, [authUser])

  // Handlers
  // index1 = purchases, index2 = sales, index3 = stores, index0 = none
  const handleShowData = (index) => {
    if (activeButton === index) {
      setActiveButton(0)
    } else {
      setActiveButton(index)
    }
  }

  const handleRedirect = () => {
    navigate(`/vendedor/${authUser.idUsuario}`)
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const purchasesUrl = authUser
    ? `/purchases/${authUser.idUsuario}`
    : '/purchases'

  // Visual content
  return (
    <div
      className={`fixed top-[64px] left-0 bg-lgray h-[calc(100%-64px)] shadow-2xl flex flex-col ${
        isSidebarOpen ? 'md:w-[20%]' : 'w-0'
      } transition-width duration-300 z-20`}
    >
      <button
        onClick={toggleSidebar}
        className={`fixed top-[78px] md:absolute md:top-4 transition-left duration-300 ${
          isSidebarOpen ? 'left-[calc(100%-4rem)] md:left-[100%]' : 'left-4'
        } z-10`}
        aria-label={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
      >
        <MenuIcon />
      </button>
      <ul
        className={`flex flex-col items-center ${isSidebarOpen ? 'block' : 'hidden'}`}
      >
        <li className="w-full">
          <Link to={purchasesUrl}>
            <CardButton
              arrow={null}
              className="flex items-center justify-center"
            >
              <ShoppingBag className="ml-2" />
              <b className="flex flex-col w-full text-center mr-4">
                {t('profile.purchases')}
              </b>
            </CardButton>
          </Link>
          <hr />
        </li>
        <li className="w-full">
          <CardButton
            onClick={() => {
              handleShowData(2)
            }}
            className="flex items-center justify-center"
          >
            <Tag className="ml-2" />
            <b className="flex flex-col w-full text-center">
              {t('profile.sales')}
            </b>
          </CardButton>
          <hr />
          <ShowDataList data={salesData} type={2} activeButton={activeButton} />
        </li>
        <li className="w-full">
          <CardButton
            onClick={() => {
              handleShowData(3)
            }}
            className="flex items-center justify-center"
          >
            <Store className="ml-2" />
            <b className="flex flex-col w-full text-center">
              {t('profile.stores')}
            </b>
          </CardButton>
          <hr />
          <ShowDataList
            data={storesData}
            type={3}
            activeButton={activeButton}
          />
        </li>
        <li className="w-full">
          <CardButton
            onClick={handleRedirect}
            arrow={0}
            className="flex items-center justify-center"
          >
            <MdOutlineReviews className="ml-2 size-6" />
            <b className="flex flex-col w-full text-center">
              {t('profile.myReviews')}
            </b>
          </CardButton>
        </li>
        <hr />
      </ul>
      <div
        className={`h-full flex justify-center ${isSidebarOpen ? 'block' : 'hidden'}`}
      >
        <img
          src={Logo}
          className="w-[160px] h-[140px] mt-8 px-1 opacity-60 grayscale"
        />
      </div>
    </div>
  )
}

export default SideBar
