//Componentes
import Philosophy from '../components/Conocenos/Philosophy'
import ValueCard from '../components/Conocenos/ValueCard'

//Iconos
import Security from '@mui/icons-material/GppGoodOutlined'
import Persons from '@mui/icons-material/PeopleAltOutlined'
import Contact from '@mui/icons-material/ContactMailOutlined'
import Bicycle from '@mui/icons-material/DirectionsBikeOutlined'
import Information from '@mui/icons-material/HelpOutlineOutlined'
import Mision from '@mui/icons-material/ShoppingCartOutlined'
import Vision from '@mui/icons-material/PedalBikeOutlined'
//Logo
import Logo from '../assets/logoVector.svg'

const Conocenos = () => {
  return (
    <div className="h-auto w-full flex flex-col px-20">
      {/*Propuesta valor */}
      <div className="h-72 bg-white shadow-xl w-full mt-8 mb-12 rounded-full flex items-center py-4 pl-4 pr-32 border border-primary/60">
        <div className="mx-4 p-10 w-1/3 h-full bg-primary shadow-2xl rounded-full flex items-center justify-center mr-4">
          <img src={Logo} className="h-full w-full" />
        </div>
        <div className="flex flex-col h-full items-center justify-center w-full relative px-5">
          <div className="w-full">
            <h1 className="font-bold text-5xl mt-2 text-primary text-left">
              {' '}
              ¿Qué hace Ciclomart?{' '}
            </h1>
          </div>

          <ul className="list-disc mt-8 text-xl mb-4">
            <li>
              Permitimos el comercio de bicicletas y repuestos de forma
              <p className="text-primary font-bold">
                especializada, segura e interactiva
              </p>
            </li>
            <li>Gestionamos los documentos legales en el comercio</li>
            <li>
              Brindamos herramientas clave como filtros y comparadores para
              ayudar a los ciclistas a tomar decisiones de compra que se ajusten
              a sus necesidades.
            </li>
          </ul>
        </div>
        <p></p>
      </div>

      {/*Misión */}
      <Philosophy name={'Vision'} Icon={Vision}>
        <p>
          Para el 2028 “Ciclomart” busca ser la plataforma preferida en Colombia
          para la compra y venta de artículos de ciclismo de forma ágil,
          informada, legal, especializada y segura.
        </p>
      </Philosophy>
      {/*Visión */}
      <Philosophy name={'Mision'} Icon={Mision}>
        <p>
          CicloMart facilita la venta y compra de artículos de ciclismo de forma
          segura, mediante la documentación legal de cada artículo publicado y,
          teniendo en cuenta, las necesidades más específicas en la búsqueda y
          adquisición de artículos para nuestros usuarios.
        </p>
      </Philosophy>

      <div className="h-12 w-full bg-primary flex items-center justify-center mt-8 rounded-xl">
        <h2 className="font-bold text-2xl">Valores</h2>
      </div>

      {/*Valores */}
      <div className="flex space-x-4 mt-10 mb-3 w-full h-72">
        <ValueCard title={'Transparencia'} Icon={Information}>
          Facilitamos la compra y venta de bicicletas y repuestos con
          información clara y detallada
        </ValueCard>
        <ValueCard title={'Accesibilidad'} Icon={Persons}>
          Proporcionamos un servicio abierto y útil para todos nuestros
          usuarios. Experimentados o no
        </ValueCard>
        <ValueCard title={'Compromiso ambiental'} Icon={Bicycle}>
          Brindamos un servicio que fomenta la adopción de un medio de
          transporte alternativo
        </ValueCard>
      </div>
      <div class="flex space-x-4 w-full items-center justify-center mb-10 h-72 ">
        <ValueCard title={'Confianza'} Icon={Contact}>
          Facilitamos una comunicación efectiva en el proceso de adquisición de
          uno de los productos publicados
        </ValueCard>
        <ValueCard title={'Seguridad'} Icon={Security}>
          Promovemos una compra y venta segura y protegemos la información de
          los usuarios que utilizan nuestros servicios
        </ValueCard>
      </div>
    </div>
  )
}

export default Conocenos
