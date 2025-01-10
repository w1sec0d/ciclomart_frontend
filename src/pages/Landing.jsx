import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import landing1 from '../assets/landing1.webp'
import Button from '../components/Button'

const LandingPage = () => {
  const responsive = {
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
  return (
    <section>
      <h1 className="w-full text-center text-4xl py-10">
        ¡Bienvenido a <span className="text-tertiary font-bold">Ciclo</span>
        <span className="text-secondary font-bold">Mart</span>! Tu{' '}
        <span className="font-bold">mercado bici </span>
        de <span className="font-bold">confianza</span>
      </h1>
      <Carousel responsive={responsive}>
        <div className="flex items-center justify-center w-full relative bg-[#ebf9f6]">
          <img
            src={landing1}
            alt="Imagen de una persona sobre una bicicleta mirando un paisaje boscoso"
            className="max-h-[80vh] rounded-md overflow-hidden object-contain"
            style={{ boxShadow: '0 0 8px 8px #ebf9f6 inset' }}
          />
        </div>
      </Carousel>
    </section>
  )
}

export default LandingPage
