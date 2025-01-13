import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import landing1 from '../assets/landing1.webp'
import ItemContainer from '../components/ItemContainer'
import bike1 from '../assets/bike1.webp'

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
      {/* <h1 className="w-full text-center text-4xl py-10">
        ¡Bienvenido a <span className="text-tertiary font-bold">Ciclo</span>
        <span className="text-secondary font-bold">Mart</span>! Tu{' '}
        <span className="font-bold">mercado bici </span>
        de <span className="font-bold">confianza</span>
      </h1> */}
      <Carousel responsive={landingCarousel}>
        <div className="flex items-center justify-center w-full relative bg-[#ebf9f6]">
          <img
            src={landing1}
            alt="Imagen de una persona sobre una bicicleta mirando un paisaje boscoso"
            className="max-h-[80vh] object-contain"
            style={{ boxShadow: '0 0 8px 8px #ebf9f6 inset' }}
          />
        </div>
      </Carousel>
      <h2 className="text-3xl text-center font-bold my-10">Lo más vendido</h2>
      <Carousel responsive={itemContainer}>
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
        <ItemContainer
          name="Bicicleta de carbono S-Works Ruta"
          img={bike1}
          fullPrice={3000000}
          price={2250000}
        />
      </Carousel>
    </section>
  )
}

export default LandingPage
