//Logo
import Logo from '../assets/logoVector.svg'
const Conocenos = () => {
  return (
    <div className="h-auto w-full flex flex-col px-20">
      {/*Propuesta valor */}
      <div className="h-80 bg-white shadow-xl w-full mt-8 mb-12 rounded-full flex items-center py-4 pl-4 pr-8 border border-primary/60">
        <div className="mx-4 p-10 w-1/3 h-full bg-primary shadow-2xl rounded-full flex items-center justify-center mr-12">
          <img src={Logo} className="h-full w-full" />
        </div>
        <div className="flex flex-col h-full items-center justify-center w-full relative">
          <div className="w-full">
            <h1 className="font-bold text-6xl text-primary text-left">
              {' '}
              ¿Qué hace Ciclomart?{' '}
            </h1>
          </div>

          <ul className="list-disc mt-12 text-xl">
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
      <div className="h-80 bg-lgray w-full mt-8 rounded-3xl">
        <div className="h-14 w-full bg-primary rounded-t-3xl shadow">
          <h1 className="text">Visión</h1>
        </div>
      </div>
      <div className="h-80 bg-lgray w-full mt-8"></div>
    </div>
  )
}

export default Conocenos
