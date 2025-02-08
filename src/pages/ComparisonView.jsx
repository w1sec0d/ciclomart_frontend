import BuyButton from '../components/Comparison/BuyButton'
import ComparisionSection from '../components/Comparison/ComparisionSection'

const Header = () => {
  return (
    <div className="h-[50px] rounded-t-3xl flex flex-row relative">
      <BuyButton>4.000.000</BuyButton>
      <div className="z-10 h-5/6 bg-lblue w-full absolute top-0 left-0 rounded-t-3xl flex justify-center items-center">
        <b className="text-xl mx-4">Comparación</b>
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
    <div className="h-auto flex flex-col">
      <div className="h-auto w-auto m-10 rounded-3xl bg-white drop-shadow-lg flex flex-col">
        {/*Header */}
        <Header />
        {/*Sección nombre y foto producto 1 y 2 respectivamente*/}
        <div className="h-72 flex flex-row w-full">
          <div className="w-1/2 bg-white h-full  border-r border-r-lgray rounded-tl-3xl  "></div>
          <div className="w-1/2 h-full bg-white rounded-tr-3xl "> </div>
        </div>
        {/*Sección elementos compartidos producto 1 y 2 respectviamente */}
        <ComparisionSection title={'Elementos Compartidos'} />
        <ComparisionSection title={'Agregados'} />
      </div>
    </div>
  )
}

export default ComparisonView
