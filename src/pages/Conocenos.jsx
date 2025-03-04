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
import juan from '../assets/Juan.jpeg'
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
          Para el 2028, Ciclomart busca ser la plataforma preferida en Colombia
          para la compra y venta de bicicletas y repuestos de ciclismo,
          destacándonos por ser un referente especializado en el sector,
          ofreciendo una experiencia ágil, informada, legal y segura.
        </p>
      </Philosophy>
      {/*Visión */}
      <Philosophy name={'Mision'} Icon={Mision}>
        <p>
          CicloMart facilita la compra y venta de bicicletas y repuestos de
          ciclismo de forma segura y especializada, garantizando la
          documentación legal de cada artículo y ofreciendo información técnica
          detallada para que los usuarios encuentren exactamente lo que
          necesitan
        </p>
      </Philosophy>

      <div className="h-12 w-full bg-primary flex items-center justify-center mt-8 rounded-xl">
        <h2 className="font-bold text-2xl">Valores</h2>
      </div>

      {/*Valores */}
      <div className="flex space-x-4 mt-10 mb-3 w-full h-72">
        <ValueCard title={'Transparencia'} Icon={Information}>
          Facilitamos la compra y venta de bicicletas y repuestos de ciclismo
          con información clara y detallada
        </ValueCard>
        <ValueCard title={'Accesibilidad'} Icon={Persons}>
          Proporcionamos un servicio abierto y útil para todos nuestros
          usuarios. Experimentados o no.
        </ValueCard>
        <ValueCard title={'Compromiso ambiental'} Icon={Bicycle}>
          Brindamos un servicio que fomenta la adopción de un medio de
          transporte alternativo como lo es la bicicleta y fomentando la
          economía circular
        </ValueCard>
      </div>
      <div className="flex space-x-4 w-full items-center justify-center mb-10 h-72 ">
        <ValueCard title={'Confianza'} Icon={Contact}>
          Promovemos la confianza entre nuestros usuarios, facilitando una
          comunicación efectiva en el proceso de adquisición de uno de los
          productos publicados. y los documentos de propiedad
        </ValueCard>
        <ValueCard title={'Seguridad'} Icon={Security}>
          Protegemos la información de los usuarios que utilizan nuestros
          servicios y promovemos una compra y venta segura
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
          photo={juan}
          name={'Juan David Madrid Contreras'}
          description={''}
          phrase={
            '"No es el último golpe el que rompe la roca, es la suma de todos los anteriores"'
          }
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
