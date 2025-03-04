//Componentes
import Philosophy from '../components/Conocenos/Philosophy'
import ValueCard from '../components/Conocenos/ValueCard'
import Team from '../components/Conocenos/Team'

//Iconos
import Security from '@mui/icons-material/GppGoodOutlined'
import Persons from '@mui/icons-material/PeopleAltOutlined'
import Contact from '@mui/icons-material/ContactMailOutlined'
import Bicycle from '@mui/icons-material/DirectionsBikeOutlined'
import Information from '@mui/icons-material/HelpOutlineOutlined'
import Mision from '@mui/icons-material/ShoppingCartOutlined'
import Vision from '@mui/icons-material/PedalBikeOutlined'

//Imagenes grupo
import daniel from '../assets/Daniel.png'
import carlos from '../assets/Carlos.png'
//Logo
import Logo from '../assets/Logo.svg'

const Conocenos = () => {
  return (
    <div className="h-auto w-full flex flex-col px-20">
      {/*Propuesta valor */}
      <div className="h-72 bg-white shadow-xl w-full mt-8 mb-12 rounded-full flex items-center py-4 pl-4 pr-32 border border-primary/60">
        <div className="rounded-full h-full w-1/3 bg-white shadow-xl mr-8 ">
          <img src={Logo} className="h-full object-fill w-full " />
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
      <div className="flex space-x-4 w-full items-center justify-center mb-10 h-72 ">
        <ValueCard title={'Confianza'} Icon={Contact}>
          Facilitamos una comunicación efectiva en el proceso de adquisición de
          uno de los productos publicados
        </ValueCard>
        <ValueCard title={'Seguridad'} Icon={Security}>
          Promovemos una compra y venta segura y protegemos la información de
          los usuarios que utilizan nuestros servicios
        </ValueCard>
      </div>

      <div className="h-12 w-full bg-primary flex items-center justify-center mt-8 rounded-xl">
        <h2 className="font-bold text-2xl">Nuestro equipo</h2>
      </div>
      <div className="flex flex-col sm:flex-row sm:space-x-10 items-center justify-center mt-10 mb-3 w-full space-y-8 sm:space-y-0">
        <Team
          photo={daniel}
          name={'Ronald Daniel Jacanamejoy'}
          description={
            'Soy una persona que siempre le gusta mejorar, aprender nuevas cosas que me ayuden en mi formacion profesional y vida personal. '
          }
          phrase={'"Disfruta cada dia, como si fuera el último"'}
          linkedin={
            'https://www.linkedin.com/in/ronald-daniel-jacanamejoy-mutumbajoy-29b2442b4/'
          }
        />

        <Team
          photo={daniel}
          name={'Juan David Madrid Contreras'}
          description={
            'Soy un apasionado por la resolución de problesma. Me gusta mucho la naturaleza aaaaaaaaaaaaaaaaa'
          }
          phrase={'"La vida es una, toca disfrutarla y vivirla"'}
          linkedin={''}
        />
        <Team
          photo={carlos}
          name={'Carlos David Ramirez Muñoz'}
          description={
            'Soy un desarrollador web y apasionado por el ciclismo. Me esfuerzo por poner el corazón en cada proyecto que emprendo. En CicloMart construyo la experiencia de compra que siempre quise tener como ciclista'
          }
          phrase={
            '"No importa lo que hagas, no importa lo que realices, lo más importante es dar el extra"'
          }
          linkedin={'https://www.linkedin.com/in/cramirezmun/'}
        />
        <Team
          photo={daniel}
          name={'Johan Rodriguez Gutierrez'}
          description={
            'Soy un apasionado por la resolución de problesma. Me gusta mucho la naturaleza aaaaaaaaaaaaaaaaa'
          }
          phrase={'"La vida es una, toca disfrutarla y vivirla"'}
          linkedin={''}
        />
      </div>
    </div>
  )
}

export default Conocenos
