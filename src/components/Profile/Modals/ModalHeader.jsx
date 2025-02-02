// -> Iconos
import Quit from '@mui/icons-material/ClearOutlined'

const ModalHeader = ({ title, onClose }) => {
  return (
    <div className="flex items-center h-[64px] w-full border-b border-lgray px-4">
      <b className="w-1/3 text-2xl">{title}</b>
      <div className="flex flex-row-reverse items-center w-2/3 h-full  ">
        <Quit
          className="hover:rounded-full hover:cursor-pointer transition duration-200 ease-in-out hover:scale-125"
          onClick={onClose}
        ></Quit>
      </div>
    </div>
  )
}

export default ModalHeader
