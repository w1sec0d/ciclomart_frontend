//-> Components
import CardButton from './CardButton'
import DataList from './DataList'

//-> Icons
import ShoppingBag from '@mui/icons-material/LocalMallOutlined'
import Store from '@mui/icons-material/StorefrontOutlined'
import Tag from '@mui/icons-material/LocalOfferOutlined'

//-> Images
import Logo from '../../assets/logoVector.svg'

//-> Utils
import apiService from '../../services/apiService.js'
import profileService from '../../services/profileService.js'
import { useState } from 'react'
import { setAuthUser } from '../../store/slices/authSlice.js'
import { useSelector } from 'react-redux'

const SideBar = () => {
  /*user global state*/
  const authUser = useSelector((state) => state.auth.authUser)

  const [showPurchases, setShowPurchases] = useState(false)
  const [showSales, setShowSales] = useState(false)
  const [showStores, setShowStores] = useState(false)
  const [dataStores, setDataStores] = useState([])
  const [dataSales, setDataSales] = useState([])
  const [dataPurchases, setDataPurchases] = useState([])

  /*Data obtained from DataBase*/
  const fetchStores = async () => {
    try {
      const data = await apiService.getTiendas()
      setDataStores(data)
    } catch (error) {
      console.error('Error fetching data stores', error)
    }
  }

  const fetchSales = async () => {
    try {
      const data = await profileService.getSales(3)
      setDataSales(data)
    } catch (error) {
      console.error('Error fetching user Sales', error)
    }
  }

  const fetchPurchases = async () => {
    try {
      const data = await profileService.getPurchases(5)
      setDataPurchases(data)
    } catch (error) {
      console.error('Error fetching user Sales', error)
    }
  }

  /* -> Handlers -> */

  /*TypeButton 1 -> Purchases
  TypeButton 2 -> Sales
  TypeButton 3 -> Stores*/

  const handlerShowData = (TypeButton) => {
    if (TypeButton === '1') {
      /*Deactivate double selected button*/
      if (showPurchases) {
        setShowPurchases(false)
      } else {
        /*Activate Buttons*/
        setShowPurchases(true)
        /*Deactivates Buttons*/
        setShowSales(false)
        setShowStores(false)
      }
    } else if (TypeButton === '2') {
      if (showSales) {
        setShowSales(false)
      } else {
        setShowSales(true)
        setShowPurchases(false)
        setShowStores(false)
      }
    } else if (TypeButton === '3') {
      if (showStores) {
        setShowStores(false)
      } else {
        setShowStores(true)
        setShowPurchases(false)
        setShowSales(false)
      }
    }
  }

  /* -> Visual Content -> */
  return (
    <div className="bg-lgray w-[20%] h-full shadow-2xl flex flex-col">
      <ul>
        <li>
          <CardButton
            onClick={() => {
              handlerShowData('1'), fetchPurchases()
            }}
          >
            <ShoppingBag className="ml-2" />
            <b className="flex flex-col w-full">Compras</b>
          </CardButton>
          <hr />

          {/*Show conditional Content*/}

          <div
            className={`overflow-hidden transition-all duration-500 ease-in ${showPurchases ? 'h-40' : 'h-0'} bg-white`}
          >
            <DataList
              data={dataPurchases}
              typeContent={1}
              firstExpression={'data.fecha'}
              secondExpression={'data.monto'}
            ></DataList>
          </div>
        </li>
        <li>
          <CardButton
            onClick={() => {
              handlerShowData('2'), fetchSales()
            }}
          >
            <Tag className="ml-2" />
            <b className="flex flex-col w-full">Ventas</b>
          </CardButton>
          <hr />
          <div
            className={`overflow-hidden transition-all duration-500 ease-in ${showSales ? 'h-40' : 'h-0'} bg-white`}
          >
            <DataList
              data={dataSales}
              typeContent={2}
              firstExpression={'data.fecha'}
              secondExpression={'data.monto'}
            ></DataList>
          </div>
        </li>
        <li>
          <CardButton
            onClick={() => {
              handlerShowData('3'), fetchStores()
            }}
          >
            <Store className="ml-2" />
            <b className="flex flex-col w-full">Tiendas</b>
          </CardButton>
          <hr />
          <div
            className={`overflow-hidden transition-all duration-500 ease-in ${showStores ? 'h-40' : 'h-0'} bg-white`}
          >
            <DataList
              data={dataStores}
              typeContent={3}
              firstExpression={'data.nombre'}
              secondExpression={'data.telefono'}
            ></DataList>
          </div>
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
