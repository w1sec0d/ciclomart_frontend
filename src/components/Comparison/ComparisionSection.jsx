import { twMerge } from 'tailwind-merge'

const ComparisionSection = ({ title, className1, className2, className3 }) => {
  return (
    <div>
      <div
        className={twMerge(
          'text-zinc-500 h-10 border-y border-y-lgray w-full flex items-center justify-center shadow-xl text-xl',
          className3
        )}
      >
        <b>{title}</b>
      </div>
      <div className="h-72 flex flex-row w-full">
        <div
          className={twMerge(
            'w-1/2 bg-white h-full  border-r border-r-lgray',
            className1
          )}
        ></div>
        <div className={twMerge('w-1/2 h-full bg-white ', className2)}></div>
      </div>
    </div>
  )
}

export default ComparisionSection
