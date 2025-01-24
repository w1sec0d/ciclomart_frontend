import { twMerge } from 'tailwind-merge'

const UserData = ({ className, dataItem, title }) => {
  return (
    <div
      className={twMerge(
        'pt-2 border-r border-b border-lgray h-[67px]',
        className
      )}
    >
      <b className="pl-4 text-sm text-primary">{title}</b>
      <p className="pl-4">{dataItem}</p>
    </div>
  )
}

export default UserData
