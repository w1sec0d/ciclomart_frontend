//-> Components
import CardButton from '../CardButton.jsx'
import DataList from '../DataList.jsx'

//-> Icons
import ShoppingBag from '@mui/icons-material/LocalMallOutlined'
import Store from '@mui/icons-material/StorefrontOutlined'
import Tag from '@mui/icons-material/LocalOfferOutlined'

//-> Images
import Logo from '../../../assets/logoVector.svg'

//-> Utils
import apiService from '../../../services/apiService.js'
import profileService from '../../../services/profileService.js'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const SideBar = () => {
  /*Estado global del usuario registrado*/
  const authUser = useSelector((state) => state.auth.authUser)
  /*Permite manejar que sección se muestra */
  const [activeButton, setActiveButton] = useState(0)
  const [activeModal, setActiveModal] = useState(0)

  const [sectionData, setSectionData] = useState([])

  //indexSection1 = Compras, indexSection2 = Ventas , indexSection3= Tiendas
  const fetchData = async (indexSection) => {
    try {
      let data
      if (indexSection === 1) {
        data = await profileService.getPurchases(authUser.idUsuario)
      } else if (indexSection === 2) {
        data = await profileService.getSales(authUser.idUsuario)
      } else {
        data = await apiService.getTiendas()
      }
      setSectionData(data)
    } catch (error) {
      console.error('Error fetching data', error)
    }
  }

  /* -> Handlers -> */
  //index1 = compras , index2= ventas , index3 = tiendas , index0 = nada

  const handleShowData = (index) => {
    if (activeButton === index) {
      setActiveButton(0)
    } else {
      setActiveButton(index)
    }
  }

  /* -> Visual Content -> */
  return (
    <div className="bg-lgray w-[20%] h-full shadow-2xl flex flex-col">
      <ul>
        <li>
          <CardButton
            onClick={() => {
              handleShowData(1), fetchData(1)
            }}
          >
            <ShoppingBag className="ml-2" />
            <b className="flex flex-col w-full">Compras</b>
          </CardButton>
          <hr />

          {/*Show conditional Content*/}

          <div
            className={`overflow-hidden transition-all duration-500 ease-in ${activeButton === 1 ? 'h-40' : 'h-0'} bg-white`}
          >
            <DataList
              data={sectionData}
              typeContent={1}
              firstExpression={'data.fecha'}
              secondExpression={'data.monto'}
              onShowModal={() => setActiveModal(1)}
            ></DataList>
          </div>
        </li>
        <li>
          <CardButton
            onClick={() => {
              handleShowData(2), fetchData(2)
            }}
          >
            <Tag className="ml-2" />
            <b className="flex flex-col w-full">Ventas</b>
          </CardButton>
          <hr />
          <div
            className={`overflow-hidden transition-all duration-500 ease-in ${activeButton === 2 ? 'h-40' : 'h-0'} bg-white`}
          >
            <DataList
              data={sectionData}
              typeContent={2}
              firstExpression={'data.fecha'}
              secondExpression={'data.monto'}
              onShowModal={() => setActiveModal(2)}
            ></DataList>
          </div>
        </li>
        <li>
          <CardButton
            onClick={() => {
              handleShowData(3), fetchData(3)
            }}
          >
            <Store className="ml-2" />
            <b className="flex flex-col w-full">Tiendas</b>
          </CardButton>
          <hr />
          <div
            className={`overflow-hidden transition-all duration-500 ease-in ${activeButton === 3 ? 'h-40' : 'h-0'} bg-white`}
          >
            <DataList
              data={sectionData}
              typeContent={3}
              firstExpression={'data.nombre'}
              secondExpression={'data.telefono'}
              onShowModal={() => setActiveModal(3)}
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
      {/*Muestra modales */}
      {activeModal === 1
        ? console.log('Modal Compras')
        : activeModal === 2
          ? console.log('Modal Ventas')
          : activeModal === 3
            ? console.log('Modal Tiendas')
            : null}
    </div>
  )
}

export default SideBar
