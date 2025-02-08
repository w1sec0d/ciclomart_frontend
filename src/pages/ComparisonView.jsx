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
  const product1 = {
    idProducto: 1,
    tipo: 'Bicicleta',
    nombre: 'MTB X1',
    precio: 1400000,
    marca: 'Trek',
    disponibilidad: 'En stock',
    'método de envio': 'Domicilio',
    fechaPublicacion: '2025-02-07',
    condición: 'Nueva',
    'tipo de bicicleta': 'Montaña',
    'tamaño del marco': 'M',
    'material del marco': 'Aluminio',
    'tamaño de rueda': '29 pulgadas',
    'tipo de frenos': 'Disco hidráulico',
    velocidades: 21,
    suspensión: 'Doble',
    transmision: 'Shimano Deore',
    color: 'Negro y rojo',
  }

  const product2 = {
    idProducto: 2,
    tipo: 'Bicicleta',
    nombre: 'Speedster 500',
    precio: 2800000,
    marca: 'Scott',
    disponibilidad: 'Agotado',
    fechaPublicacion: '2025-01-15',
    condición: 'Nueva',
    'tipo de bicicleta': 'Ruta',
    'tamaño del marco': 'L',
    'material del marco': 'Carbono',
    'tamaño de rueda': '700C',
    'tipo de frenos': 'Caliper',
    velocidades: 21,
    transmision: 'Shimano Ultegra',
    'método de envio': 'Domicilio',
    peso: 8,
  }

  //Captura las keys de cada uno de los productos
  const propertiesProduct1 = Object.keys(product1)
  const propertiesProduct2 = Object.keys(product2)
  const properties = propertiesProduct1.concat(propertiesProduct2)
  const uniqProperties = [...new Set(properties)]

  //Captura las coindencias entre los productos y retorna las keys sin duplicados
  const coincidences = uniqProperties.filter((property) => {
    if (property != 'idProducto') {
      return (
        propertiesProduct2.includes(property) &&
        propertiesProduct1.includes(property)
      )
    }
  })

  //Captura las discrepancias entre los productos
  const discrepancies = uniqProperties.filter(
    (property) =>
      !propertiesProduct2.includes(property) ||
      !propertiesProduct1.includes(property)
  )

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
        <ComparisionSection
          title={'Elementos Compartidos'}
          product1={product1}
          product2={product2}
          coincidences={coincidences}
          highlightDiffs={true}
        />
        {/*Sección elementos Agregados */}
        <ComparisionSection
          title={'Agregados'}
          className1={'rounded-bl-3xl'}
          className2={'rounded-br-3xl'}
          product1={product1}
          product2={product2}
          coincidences={discrepancies}
        />
      </div>

      <div className="flex justify-center">
        <SouthIcon style={{ fontSize: '9rem', opacity: 0.1 }}></SouthIcon>
      </div>
      <div className="h-auto w-auto mx-10 mb-8 my-10 rounded-bl-3xl rounded-br-3xl bg-white drop-shadow-lg flex flex-col">
        <div className="text-black h-10 border-y border-y-lgray w-full flex flex-row items-center justify-center  text-xl bg-lblue opacity-80">
          {/*Muestra un botón para resaltar diferencias */}
          <b>Información vendedores</b>
        </div>
        <div className="w-1/2 h-auto"></div>
      </div>
    </div>
  )
}

export default ComparisonView
