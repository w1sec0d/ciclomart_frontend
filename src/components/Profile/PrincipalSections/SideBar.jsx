//-> Components
import CardButton from '../CardButton.jsx'
import ShowDataList from '../ShowDataList.jsx'

//-> Icons
import ShoppingBag from '@mui/icons-material/LocalMallOutlined'
import Store from '@mui/icons-material/StorefrontOutlined'
import Tag from '@mui/icons-material/LocalOfferOutlined'
import ReviewsIcon from '@mui/icons-material/Reviews'
import MenuIcon from '@mui/icons-material/Menu' // Importa el icono de menú

//-> Images
import Logo from '../../../assets/logoVector.svg'

//-> Utils
import apiService from '../../../services/apiService.js'
import profileService from '../../../services/profileService.js'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const SideBar = () => {
  /*Estado global del usuario registrado*/
  const authUser = useSelector((state) => state.auth.authUser)
  /*Permite manejar que sección se muestra */
  const [activeButton, setActiveButton] = useState(0)
  const [purchaseData, setPurchaseData] = useState([])
  const [salesData, setSalesData] = useState([])
  const [storesData, setStoresData] = useState([])
  const [isSidebarOpen, setIsSidebarOpen] = useState(false) // Estado para controlar la visibilidad del sidebar
  /*Cambia de pegina a mis reseñas */
  const navigate = useNavigate()

  //indexSection1 = Compras, indexSection2 = Ventas , indexSection3= Tiendas
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const purchaseData = await profileService.getPurchases(
          authUser.idUsuario
        )
        const salesData = await profileService.getSales(authUser.idUsuario)
        const storesData = await apiService.getTiendas()
        setPurchaseData(purchaseData.results)
        setSalesData(salesData.results)
        setStoresData(storesData.results)
      } catch (error) {
        console.error('Error obteniendo datos de la sidebar', error)
      }
    }

    if (authUser && authUser.idUsuario) {
      fetchInitialData()
    }
  }, [authUser])

  /* -> Handlers -> */
  //index1 = compras , index2= ventas , index3 = tiendas , index0 = nada
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

  /* -> Contenido Visual -> */
  return (
    <div
      className={`fixed top-[64px] left-0 bg-lgray h-[calc(100%-64px)] shadow-2xl flex flex-col ${
        isSidebarOpen ? 'w-[20%]' : 'w-0'
      } transition-width duration-300 z-30`}
    >
      <button
        onClick={toggleSidebar}
        className={`absolute top-4 transition-left duration-300 ${
          isSidebarOpen ? 'left-[100%]' : 'left-4'
        } z-40`}
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
              <b className="flex flex-col w-full text-center">Compras</b>
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
            <b className="flex flex-col w-full text-center">Ventas</b>
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
            <b className="flex flex-col w-full text-center">Tiendas</b>
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
            <ReviewsIcon className="ml-2" />
            <b className="flex flex-col w-full text-center">Mis Reseñas</b>
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
