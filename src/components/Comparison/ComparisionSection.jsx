import { twMerge } from 'tailwind-merge'

const ComparisionSection = ({
  title,
  className1,
  className2,
  className3,
  coincidences = [],
  product1,
  product2,
}) => {
  return (
    <div>
      <div
        className={twMerge(
          'text-zinc-500 h-10 border-y border-y-lgray w-full flex items-center justify-center  text-xl',
          className3
        )}
      >
        <b>{title}</b>
      </div>
      <div className="h-auto max-h-72 flex flex-row w-full overflow-auto pr-0">
        <div className={twMerge('w-1/2 bg-white h-auto', className1)}>
          {coincidences.map((property, index) => (
            <div
              className="h-12 border-b flex items-center pl-3 border-lgray border-r"
              key={index}
            >
              <p>
                <b className="text-zinc-500">{property}: </b>{' '}
                {product1[property]}
              </p>
            </div>
          ))}
        </div>
        <div className={twMerge('w-1/2 h-auto bg-white ', className2)}>
          {coincidences.map((property, index) => (
            <div
              className="h-12 border-b flex items-center pl-3 border-lgray"
              key={index}
            >
              <p>
                <b className="text-zinc-500">{property}: </b>{' '}
                {product2[property]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ComparisionSection
