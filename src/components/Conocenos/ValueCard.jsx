const ValueCard = ({ title, children, Icon }) => {
  return (
    <div className="h-full w-full bg-white rounded-xl shadow-xl flex flex-col items-center border border-primary">
      <div className="bg-primary w-full h-12 rounded-t-xl flex items-center justify-center shadow-md ">
        <h3 className="font-bold text-lg">{title}</h3>
      </div>
      <div>
        <Icon style={{ fontSize: '8rem' }} />
      </div>
      <p className="mt-4 text-center m-2">{children}</p>
    </div>
  )
}

export default ValueCard
