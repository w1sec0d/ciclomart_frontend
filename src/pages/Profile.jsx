import CardButton from '../components/CardButton'

//-> Icons
import ShoppingBag from '@mui/icons-material/LocalMallOutlined'
import Store from '@mui/icons-material/StorefrontOutlined'
import Tag from '@mui/icons-material/LocalOfferOutlined'

const Profile = () => {
  return (
    <section className="flex flex-row h-screen">
      {/* Side Bar */}
      <div className="bg-lgray w-1/6 h-full">
        <ul>
          <li>
            <CardButton to="/register">
              <ShoppingBag className="ml-2" />
              <b className="flex flex-col w-full">Compras</b>
            </CardButton>
          </li>
          <li>
            <CardButton to="/register">
              <Tag className="ml-2" />
              <b className="flex flex-col w-full">Ventas</b>
            </CardButton>
          </li>
          <li>
            <CardButton to="/register">
              <Store className="ml-2" />
              <b className="flex flex-col w-full">Ventas</b>
            </CardButton>
          </li>
        </ul>
      </div>

      {/* Information */}
      <div className="flex flex-col w-5/6 h-full">
        <div className="mt-8 mx-[45px] bg-lgray h-44 w-auto"></div>
        <div className="mt-8 mx-[45px] bg-lgray h-80 w-auto">
          <ul className="h-full">
            <li className="h-1/3">
              <CardButton arrow="2" className="h-full mt-0">
                <ShoppingBag className="ml-2" />
                <b className="flex flex-col w-full">Compras</b>
              </CardButton>
            </li>
            <li className="h-1/3">
              <CardButton arrow="2" className="h-full mt-0">
                <ShoppingBag className="ml-2" />
                <b className="flex flex-col w-full">Compras</b>
              </CardButton>
            </li>
            <li className="h-1/3">
              <CardButton arrow="2" className="h-full mt-0">
                <ShoppingBag className="ml-2" />
                <b className="flex flex-col w-full">Compras</b>
              </CardButton>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
export default Profile
