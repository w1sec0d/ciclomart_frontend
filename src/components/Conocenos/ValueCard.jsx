import { twMerge } from 'tailwind-merge'

const ValueCard = ({ title, children, Icon, className }) => {
  return (
    <div
      className={twMerge(
        'h-full w-1/3 bg-white rounded-xl shadow-xl flex flex-col items-center border border-primary',
        className
      )}
    >
      <div className="bg-primary w-full h-12 rounded-t-xl flex items-center justify-center shadow-md ">
        <h3 className="font-bold text-lg">{title}</h3>
      </div>
      <div className="h-[6rem] w-full flex items-center justify-center mt-4">
        <Icon style={{ fontSize: '6rem', color: '#A2C634', opacity: 0.7 }} />
      </div>
      <p className="mt-4 text-center m-2">{children}</p>
    </div>
  )
}

export default ValueCard
