// Componentes
import BuyButton from '../components/Comparison/BuyButton'
import ComparisionSection from '../components/Comparison/ComparisionSection'

// Iconos
import SouthIcon from '@mui/icons-material/South'

const Header = () => {
  return (
    <div className="h-[50px] flex flex-row relative">
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
      <div className="h-auto w-auto mx-10 mb-8 my-10 rounded-3xl bg-white drop-shadow-lg flex flex-col">
        {/*Header */}
        <Header />
        {/*Sección nombre y foto producto 1 y 2 respectivamente*/}
        <div className="h-72 flex flex-row w-full">
          <div className="w-1/2 bg-white h-full  border-r border-r-lgray   "></div>
          <div className="w-1/2 h-full bg-white  "> </div>
        </div>
        {/*Sección elementos compartidos producto 1 y 2 respectviamente */}
        <ComparisionSection title={'Elementos Compartidos'} />
        {/*Sección elementos Agregados */}
        <ComparisionSection
          title={'Agregados'}
          className1={'rounded-bl-3xl'}
          className2={'rounded-br-3xl'}
        />
      </div>
      <button className="mx-10 mb-10 bg-tertiary bg-opacity-45 rounded-xl h-12 drop-shadow-2xl hover:bg-tertiary">
        <b className="text-xl">Resaltar Diferencias</b>
      </button>

      <div className="flex justify-center">
        <SouthIcon style={{ fontSize: '9rem', opacity: 0.1 }}></SouthIcon>
      </div>
      <div className="h-auto w-auto mx-10 mb-8 my-10 rounded-bl-3xl rounded-br-3xl bg-white drop-shadow-lg flex flex-col">
        <ComparisionSection
          title={'Información del vendedor'}
          className1={'rounded-bl-3xl'}
          className2={'rounded-br-3xl'}
          className3={'bg-primary rounded-t-3xl h-14 text-black'}
        />
      </div>
    </div>
  )
}

export default ComparisonView
