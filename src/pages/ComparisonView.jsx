import BuyButton from '../components/Comparison/BuyButton'

const Header = () => {
  return (
    <div className="h-[50px] rounded-t-3xl flex flex-row mb-4 relative">
      <BuyButton>4.000.000</BuyButton>
      <div className="z-0 h-5/6 bg-lblue w-full absolute top-0 left-0 rounded-t-3xl flex justify-center items-center">
        <b className="text-xl">Comparación</b>
      </div>
      <BuyButton
        className={
          'ml-auto rounded-tl-none rounded-br-none rounded-bl-[3rem] rounded-tr-3xl bg-secondary'
        }
      >
        4.000.000
      </BuyButton>
    </div>
  )
}

const ComparisonView = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="h-[320px] w-auto m-4 rounded-3xl bg-white drop-shadow-lg">
        {/*Header */}
        <Header />
      </div>
    </div>
  )
}

export default ComparisonView
