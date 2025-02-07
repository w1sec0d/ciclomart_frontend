import { useState } from 'react'
import DataList from './DataList.jsx'

//Este componente sirve para mostrar los datos al dar click en algun elemento de la sidebar
const showDataList = ({ data, type, activeButton }) => {
  const [activeModal, setActiveModal] = useState(0)
  return (
    <div
      className={`overflow-hidden transition-all duration-500 ease-in ${activeButton === type ? 'h-40' : 'h-0'} bg-white`}
    >
      <DataList
        data={data}
        typeContent={type}
        onShowModal={() => setActiveModal(typeContent)}
      ></DataList>
    </div>
  )
}

export default showDataList
