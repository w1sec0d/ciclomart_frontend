import ModalHeader from './ModalHeader'

const Modal = ({ children, onClose, title }) => {
  return (
    <div
      className="flex items-center justify-center fixed inset-0 h-full w-full z-10 bg-gray/60 "
      onClick={onClose}
    >
      <div
        className="w-[800px] bg-white rounded-3xl shadow-2xl z-20 mx-4 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <ModalHeader title={title} onClose={onClose} />
        <div className="border-b border-lgray">{children}</div>
      </div>
    </div>
  )
}

export default Modal
