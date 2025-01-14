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

  /*Tests JSONS*/
  const tiendas = [
    {
      idTienda: 1,
      idUsuarioAdministrador: 101,
      nombre: 'CicloMarket',
      descripcion: 'Tienda de bicicletas y accesorios',
      telefono: '3201234567',
    },
    {
      idTienda: 2,
      idUsuarioAdministrador: 102,
      nombre: 'BikePro',
      descripcion: 'Repuestos y personalización de bicicletas',
      telefono: '3109876543',
    },
    {
      idTienda: 3,
      idUsuarioAdministrador: 103,
      nombre: 'EcoRide',
      descripcion: 'Bicicletas ecológicas y eléctricas',
      telefono: '3126547890',
    },
    {
      idTienda: 4,
      idUsuarioAdministrador: 104,
      nombre: 'UrbanCycle',
      descripcion: 'Especialistas en bicicletas urbanas',
      telefono: '3001122334',
    },
    {
      idTienda: 5,
      idUsuarioAdministrador: 105,
      nombre: 'MountainXtreme',
      descripcion: 'Bicicletas de montaña y accesorios',
      telefono: '3155566778',
    },
  ]

  const ventas = [
    {
      idProducto: 1,
      idUsuario: 101,
      tipo: 'venta',
      descripcion: 'Bicicleta de montaña usada',
      estado: 'completado',
      precio: 850000.0,
      fechaCompra: '2025-01-10',
    },
    {
      idProducto: 11,
      idUsuario: 101,
      tipo: 'venta',
      descripcion: 'Casco de ciclismo con luz integrada',
      estado: 'pendiente',
      precio: 150000.0,
      fechaCompra: '2025-01-12',
    },
    {
      idProducto: 12,
      idUsuario: 101,
      tipo: 'venta',
      descripcion: 'Portabicicletas para automóvil',
      estado: 'procesando',
      precio: 300000.0,
      fechaCompra: '2025-01-14',
    },
    {
      idProducto: 13,
      idUsuario: 101,
      tipo: 'venta',
      descripcion: 'Juego de luces LED traseras',
      estado: 'completado',
      precio: 50000.0,
      fechaCompra: '2025-01-15',
    },
    {
      idProducto: 14,
      idUsuario: 101,
      tipo: 'venta',
      descripcion: 'Zapatos para ciclismo de montaña',
      estado: 'pendiente',
      precio: 200000.0,
      fechaCompra: '2025-01-16',
    },
  ]

  const compras = [
    {
      idProducto: 2,
      idUsuario: 101,
      tipo: 'compra',
      descripcion: 'Casco profesional para ciclismo',
      estado: 'pendiente',
      precio: 120000.0,
      fechaCompra: '2025-01-12',
    },
    {
      idProducto: 10,
      idUsuario: 101,
      tipo: 'compra',
      descripcion: 'Par de neumáticos para montaña',
      estado: 'completado',
      precio: 180000.0,
      fechaCompra: '2025-01-08',
    },
    {
      idProducto: 15,
      idUsuario: 101,
      tipo: 'compra',
      descripcion: 'Bomba de aire portátil',
      estado: 'procesando',
      precio: 50000.0,
      fechaCompra: '2025-01-13',
    },
    {
      idProducto: 16,
      idUsuario: 101,
      tipo: 'compra',
      descripcion: 'Cámara de repuesto para carretera',
      estado: 'completado',
      precio: 25000.0,
      fechaCompra: '2025-01-14',
    },
    {
      idProducto: 17,
      idUsuario: 101,
      tipo: 'compra',
      descripcion: 'Guantes térmicos de invierno',
      estado: 'pendiente',
      precio: 80000.0,
      fechaCompra: '2025-01-15',
    },
  ]

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
              handlerShowData('1')
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
              data={compras}
              typeContent={1}
              firstExpression={'data.descripcion'}
              secondExpression={'data.precio'}
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
