//-> Components
import CardButton from '../CardButton.jsx'
import ShowDataList from '../ShowDataList.jsx'

//-> Icons
import ShoppingBag from '@mui/icons-material/LocalMallOutlined'
import Store from '@mui/icons-material/StorefrontOutlined'
import Tag from '@mui/icons-material/LocalOfferOutlined'

//-> Images
import Logo from '../../../assets/logoVector.svg'

//-> Utils
import apiService from '../../../services/apiService.js'
import profileService from '../../../services/profileService.js'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const SideBar = () => {
  /*Estado global del usuario registrado*/
  const authUser = useSelector((state) => state.auth.authUser)
  /*Permite manejar que sección se muestra */
  const [activeButton, setActiveButton] = useState(0)
  const [purchaseData, setPurchaseData] = useState([])
  const [salesData, setSalesData] = useState([])
  const [storesData, setStoresData] = useState([])

  //indexSection1 = Compras, indexSection2 = Ventas , indexSection3= Tiendas
  const fetchInitialData = async () => {
    try {
      const purchaseData = await profileService.getPurchases(authUser.idUsuario)
      const salesData = await profileService.getSales(authUser.idUsuario)
      const storesData = await apiService.getTiendas()
      setPurchaseData(purchaseData.results)
      setSalesData(salesData.results)
      setStoresData(storesData.results)
    } catch (error) {
      console.error('Error obteniendo datos de la sidebarxd', error)
    }
  }

  useEffect(() => {
    if (authUser.idUsuario) {
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

  /* -> Contenido Visual -> */
  return (
    <div className="bg-lgray w-[20%] h-full shadow-2xl flex flex-col">
      <ul>
        <li>
          <CardButton
            onClick={() => {
              handleShowData(1)
            }}
          >
            <ShoppingBag className="ml-2" />
            <b className="flex flex-col w-full">Compras</b>
          </CardButton>
          <hr />
          {/*Muestra contenido condicional*/}
          <ShowDataList
            data={purchaseData}
            type={1}
            activeButton={activeButton}
          />
        </li>
        <li>
          <CardButton
            onClick={() => {
              handleShowData(2)
            }}
          >
            <Tag className="ml-2" />
            <b className="flex flex-col w-full">Ventas</b>
          </CardButton>
          <hr />
          <ShowDataList data={salesData} type={2} activeButton={activeButton} />
        </li>
        <li>
          <CardButton
            onClick={() => {
              handleShowData(3)
            }}
          >
            <Store className="ml-2" />
            <b className="flex flex-col w-full">Tiendas</b>
          </CardButton>
          <hr />
          <ShowDataList
            data={storesData}
            type={3}
            activeButton={activeButton}
          />
        </li>
      </ul>
      <div className="h-full flex justify-center">
        <img
          src={Logo}
          className="w-[160px] h-[140px] mt-8 px-1 opacity-60 grayscale"
        />
      </div>
    </div>
  )
}

export default SideBar
