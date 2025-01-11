import CardButton from '../components/CardButton'

//-> Icons
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined'
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined'

const Profile = () => {
  return (
    <section className="flex flex-row h-screen">
      {/* Side Bar */}
      <div className="bg-lgray w-1/6 h-full">
        <ul>
          <li>
            <CardButton to="/register">
              <LocalMallOutlinedIcon className="ml-2" />
              <b className="flex flex-col w-full">Compras</b>
            </CardButton>
          </li>
          <li>
            <CardButton to="/register">
              <LocalOfferOutlinedIcon className="ml-2" />
              <b className="flex flex-col w-full">Ventas</b>
            </CardButton>
          </li>
          <li>
            <CardButton to="/register">
              <StoreOutlinedIcon className="ml-2" />
              <b className="flex flex-col w-full">Ventas</b>
            </CardButton>
          </li>
        </ul>
      </div>

      {/* Information */}
      <div className="flex flex-col w-5/6 h-full">
        <div className="mt-8 mx-[45px] bg-lgray h-44 w-auto"></div>
        <div className="mt-8 mx-[45px] bg-lgray h-80 w-auto"></div>
      </div>
    </section>
  )
}
export default Profile
