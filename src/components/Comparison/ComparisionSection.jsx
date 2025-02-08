const ComparisionSection = ({ title }) => {
  return (
    <div>
      <div className="h-20 border-y border-y-lgray w-full">
        <b>{title}</b>
      </div>
      <div className="h-72 flex flex-row w-full">
        <div className="w-1/2 bg-white h-full  border-r border-r-lgray rounded-tl-3xl  rounded-bl-3xl"></div>
        <div className="w-1/2 h-full bg-white rounded-tr-3xl rounded-br-3xl "></div>
      </div>
    </div>
  )
}

export default ComparisionSection
