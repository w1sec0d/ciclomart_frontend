//-> Components
import CardButton from '../CardButton'

//-> Icons
import ShoppingBag from '@mui/icons-material/LocalMallOutlined'
import Store from '@mui/icons-material/StorefrontOutlined'
import Tag from '@mui/icons-material/LocalOfferOutlined'

//-> Images
import Logo from '../../assets/logoVector.svg'

const SideBar = () => {
  return (
    <div className="bg-lgray w-1/6 h-full shadow-2xl flex flex-col">
      <ul>
        <li>
          <CardButton>
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
            <b className="flex flex-col w-full">Ventas</b>
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
