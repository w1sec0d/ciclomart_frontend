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

  /* -> Handlers -> */

  /*TypeButton 1 -> Purchases
  TypeButton 2 -> Sales
  TypeButton 3 -> Stores*/

  const handlerShowData = (TypeButton) => {
    if (TypeButton === '1') {
      /*Deactivate doble selected button*/
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
    <div className="bg-lgray w-1/6 h-full shadow-2xl flex flex-col">
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
