// Carousel styling
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

// Assets importing
import landing1 from '../assets/landing1.webp'
import bike1 from '../assets/bike1.webp'
import bike2 from '../assets/bike2.webp'
import offer from '../assets/offer.png'
import repuestos from '../assets/repuestos.webp'
import {
  LocalFireDepartment,
  PedalBike,
  SettingsSuggest,
} from '@mui/icons-material'

// Components
import ItemContainer from '../components/ItemContainer'

const LandingPage = () => {
  const landingCarousel = {
    // superLargeDesktop: {
    //   // the naming can be any, depends on you.
    //   breakpoint: { max: 4000, min: 3000 },
    //   items: 5,
    // },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
  const itemContainer = {
    // superLargeDesktop: {
    //   // the naming can be any, depends on you.
    //   breakpoint: { max: 4000, min: 3000 },
    //   items: 5,
    // },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 5,
    },
  }
  return (
    <section>
      <Carousel responsive={landingCarousel}>
        <div className="flex items-center justify-center w-full relative bg-[#ebf9f6]">
          <img
            src={landing1}
            alt="Imagen de una bicicleta deportiva blanca con el mensaje: Encuentra tu nueva bici con los componentes que necesitas (has click aqui)"
            className="max-h-[80vh] object-contain"
            style={{ boxShadow: '0 0 8px 8px #ebf9f6 inset' }}
          />
        </div>
      </Carousel>
      <h2 className="text-3xl text-center font-bold my-10">
        <LocalFireDepartment fontSize="large" /> Lo más vendido
      </h2>
      <Carousel responsive={itemContainer} className="ml-7 mb-10">
        <ItemContainer
          name="Bicicleta de carbono S-Works Ruta"
          img={bike1}
          fullPrice={3000000}
          price={2250000}
          freeShipping={true}
        />
        <ItemContainer
          name="Bicicleta de carbono S-Works Ruta"
          img={bike1}
          fullPrice={3000000}
          price={2250000}
        />
        <ItemContainer
          name="Bicicleta de carbono S-Works Ruta"
          img={bike1}
          fullPrice={3000000}
          price={2250000}
        />
        <ItemContainer
          name="Bicicleta de carbono S-Works Ruta"
          img={bike1}
          fullPrice={3000000}
          price={2250000}
        />
        <ItemContainer
          name="Bicicleta de carbono S-Works Ruta"
          img={bike1}
          fullPrice={3000000}
          price={2250000}
        />
        <ItemContainer
          name="Bicicleta de carbono S-Works Ruta"
          img={bike1}
          fullPrice={3000000}
          price={2250000}
        />
        <ItemContainer
          name="Bicicleta de carbono S-Works Ruta"
          img={bike1}
          fullPrice={3000000}
          price={2250000}
        />
      </Carousel>
      <h2 className="text-3xl text-center font-bold my-10">
        <PedalBike fontSize="large" /> Explora tu mundo bici
      </h2>
      <section className="flex flex-row justify-between max-w-[800px] mx-auto">
        <div>
          <img src={offer} className="w-[200px] h-[200px] object-contain" />
          <h3 className="font-semibold text-center my-2 text-xl">Ofertas</h3>
        </div>
        <div>
          <img src={bike2} className="w-[200px] h-[200px] object-contain" />
          <h3 className="font-semibold text-center my-2 text-xl">Bicicletas</h3>
        </div>
        <div>
          <img src={repuestos} className="w-[200px] h-[200px] object-contain" />
          <h3 className="font-semibold text-center my-2 text-xl">Repuestos</h3>
        </div>
      </section>
      <section className="my-6">
        <h2 className="text-3xl text-center font-bold my-10">
          <SettingsSuggest fontSize="large" /> Encuentra{' '}
          <span className="italic">ese repuesto</span> que necesitas
        </h2>
        <Carousel responsive={itemContainer} className="ml-7 mb-10">
          <ItemContainer
            name="Repuesto"
            img={repuestos}
            fullPrice={3000000}
            price={2250000}
            freeShipping={true}
          />
          <ItemContainer
            name="Repuesto"
            img={repuestos}
            fullPrice={3000000}
            price={2250000}
            freeShipping={true}
          />
          <ItemContainer
            name="Repuesto"
            img={repuestos}
            fullPrice={3000000}
            price={2250000}
          />
          <ItemContainer
            name="Repuesto"
            img={repuestos}
            fullPrice={3000000}
            price={2250000}
          />
          <ItemContainer
            name="Repuesto"
            img={repuestos}
            fullPrice={3000000}
            price={2250000}
          />
          <ItemContainer
            name="Repuesto"
            img={repuestos}
            fullPrice={3000000}
            price={2250000}
            freeShipping={true}
          />
        </Carousel>
      </section>
    </section>
  )
}

export default LandingPage
