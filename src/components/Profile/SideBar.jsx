//-> Components
import CardButton from './CardButton'

//-> Icons
import ShoppingBag from '@mui/icons-material/LocalMallOutlined'
import Store from '@mui/icons-material/StorefrontOutlined'
import Tag from '@mui/icons-material/LocalOfferOutlined'

//-> Images
import Logo from '../../assets/logoVector.svg'

//-> Utils
import { useEffect, useState } from 'react'

const SideBar = () => {
  const [showPurchases, setShowPurchases] = useState(false)
  const [showSales, setShowSales] = useState(false)
  const [showStores, setShowStores] = useState(false)

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

          {/*Show content*/}

          <div
            className={`overflow-hidden transition-all duration-500 ease-in ${showPurchases ? 'h-40' : 'h-0'} bg-white`}
          >
            <p className="h-full overflow-auto">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
        </li>
        <li>
          <CardButton
            onClick={() => {
              handlerShowData('2')
            }}
          >
            <Tag className="ml-2" />
            <b className="flex flex-col w-full">Ventas</b>
          </CardButton>
          <hr />
          <div
            className={`overflow-hidden transition-all duration-500 ease-in ${showSales ? 'h-40' : 'h-0'} bg-white`}
          >
            <p className="h-full overflow-auto">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
        </li>
        <li>
          <CardButton
            onClick={() => {
              handlerShowData('3')
            }}
          >
            <Store className="ml-2" />
            <b className="flex flex-col w-full">Tiendas</b>
          </CardButton>
          <hr />
          <div
            className={`overflow-hidden transition-all duration-500 ease-in ${showStores ? 'h-40' : 'h-0'} bg-white`}
          >
            <div className="w-full h-full overflow-auto">
              <div className="w-full flex justify-center">
                <b className="text-primary border-b border-lgray">
                  Nuestras tiendas
                </b>
              </div>
              <div>
                {tiendas.map((tienda, index) => {
                  return (
                    <div
                      className={`pl-1 pt-2 flex flex-row  items-center border-b border-lgray ${index === 0 ? 'mt-2' : ''}`}
                    >
                      <b className="text-secondary mr-2 break-all">
                        {tienda.nombre}
                      </b>
                      <p className="text-sm ml-auto break-all">
                        {tienda.telefono}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
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
