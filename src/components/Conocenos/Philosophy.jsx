const Philosophy = ({ name, Icon, children }) => {
  return (
    <div className="h-80 bg-white shadow-xl border border-primary/60 w-full mt-4 mb-4 rounded-3xl flex flex-col ">
      <div className="h-14 w-full bg-primary rounded-t-3xl shadow flex items-center justify-center">
        <h1 className="font-bold text-4xl ">{name}</h1>
      </div>
      <div className="flex flex-row h-full w-full ">
        <div className="border-r h-full border-primary flex items-center justify-center p-10">
          <Icon style={{ fontSize: '9rem' }} />
        </div>
        <div className="flex items-center p-4 text-2xl">{children}</div>
      </div>
    </div>
  )
}

export default Philosophy
