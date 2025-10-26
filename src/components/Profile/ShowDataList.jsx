import { useState } from 'react'
import DataList from './DataList.jsx'

// This component is used to show data when clicking on a sidebar element
const showDataList = ({ data, type, activeButton }) => {
  const [activeModal, setActiveModal] = useState(0)
  return (
    <div
      className={`overflow-hidden transition-all duration-500 ease-in ${activeButton === type ? 'h-40' : 'h-0'} bg-white`}
    >
      <DataList
        data={data}
        typeContent={type}
        onShowModal={() => setActiveModal(type)}
      ></DataList>
    </div>
  )
}

export default showDataList
