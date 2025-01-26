// -> Utilidades
import { twMerge } from 'tailwind-merge'

/* Permite mostrar información de el modal de seguridad y de preferencias*/
const PrefData = ({ text, children, className }) => {
  return (
    <div
      className={twMerge(
        'border-b border-lgray flex flex-row items-center hover:border-b hover:border-t hover:border-black hover:cursor-pointer hover:bg-lgray hover:animate-pulse',
        className
      )}
    >
      {children}
      <div className="h-full w-full flex flex-col justify-center items-center">
        <b className="text-2xl">{text}</b>
      </div>
    </div>
  )
}

export default PrefData
