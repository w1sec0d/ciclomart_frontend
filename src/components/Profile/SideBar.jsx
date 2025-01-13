//-> Components
import CardButton from './CardButton'

//-> Icons
import ShoppingBag from '@mui/icons-material/LocalMallOutlined'
import Store from '@mui/icons-material/StorefrontOutlined'
import Tag from '@mui/icons-material/LocalOfferOutlined'

//-> Images
import Logo from '../../assets/logoVector.svg'

//-> Utils
import { useState } from 'react'
import { Button } from '@mui/material'

const SideBar = () => {
  const [ShowPurchases, setShowPurchases] = useState(false)
  const [ShowSales, setShowSales] = useState(false)
  const [ShowStores, setShowStores] = useState(false)

  /* -> Handlers -> */

  /*TypeButton 1 -> Purchases
  TypeButton 2 -> Sales
  TypeButton 3 -> Stores*/

  const handlerShowData = (TypeButton) => {
    if (TypeButton === '1') {
      setShowPurchases(true)
    } else if (TypeButton === '2') {
      setShowSales(true)
    } else if (TypeButton === '3') {
      setShowStores(true)
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
        </li>
        <li>
          <CardButton>
            <Tag className="ml-2" />
            <b className="flex flex-col w-full">Ventas</b>
          </CardButton>
          <hr />
        </li>
        <li>
          <CardButton>
            <Store className="ml-2" />
            <b className="flex flex-col w-full">Tiendas</b>
          </CardButton>
          <hr />
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
