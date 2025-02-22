import { useParams } from 'react-router-dom'
import Photo from '../assets/userPhoto.png'
import StarRating from '../components/StarRating'
import ratingService from '../services/ratingService'
import { useState, useEffect } from 'react'
import RatingSeller from '../components/vendedor/RatingSeller'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const Navbar = ({setFilter}) => {
  const buttonClasses = 'rounded-full p-1 bg-lgray hover:bg-blue-500 hover:text-white transition-all duration-300';

  return (
    <nav className='flex items-center justify-between w-full gap-8 px-6 py-3'>
      <div>
        <h1 className='flex text-3xl font-bold'>Reseñas</h1>
      </div>
      <div className='rounded-full bg-lgray p-2 px-3 space-x-4 items-center'>
        {['Recientes', 'Con Fotos', 'Positivas', 'Neutrales', 'Negativas'].map((label) => (
          <button key={label} className={buttonClasses} onClick={() => setFilter(label)}>
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
};

const Vendedor = () => {
  const { id } = useParams()
  const [results, setResults] = useState([])
  const [promedio, setPromedio] = useState(0)
  const [size, setSize] = useState(0)
  const [positivas, setPositivas] = useState([])
  const [neutras, setNeutras] = useState([])
  const [negativas, setNegativas] = useState([])
  const [filter, setFilter] = useState('Positivas')
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const getRatingSeller = async () => {
    try {
      const results = await ratingService.getRatingSeller(id)
      const sumaNotas = results.reduce((suma, { nota }) => suma + nota, 0)
      const promedio = results.length ? sumaNotas / results.length : 0
      const size = (results.length === 1 && results[0].nota === null) ? 0 : results.length
      const positivas = results.filter(({ nota }) => nota >= 4)
      const neutras = results.filter(({ nota }) => nota === 3)
      const negativas = results.filter(({ nota }) => nota < 3)

      setResults(results[0])
      setPromedio(promedio)
      setSize(size)
      setPositivas(positivas)
      setNeutras(neutras)
      setNegativas(negativas)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getRatingSeller()
  }, [id])

  const filterResults = (() => {
    switch (filter) {
      case 'Positivas': return positivas
      case 'Neutrales': return neutras
      case 'Negativas': return negativas
      default: return positivas
    }
  })()

  return (
    <div className="relative flex items-center justify-center h-screen">
      <div className="flex flex-col w-[100%] h-full">
        <div className="flex items-center mt-8 mx-[170px] h-44 w-auto shadow-lg pl-20">
          <div className='flex relative ml-4'>
            <img src={Photo} className='w-36 h-36 rounded-full' alt='Foto de perfil' />
          </div>
          <div className='flex flex-col lg:ml-[50px]'>
            <div className='flex flex-row'>
              <b className="text-4xl">{results.nombre} </b>
              <b className='text-4xl'>&nbsp;{results.apellido}</b>
            </div>
            <div className='flex flex-row mt-5'>
              <div className='flex flex-col'>
                <StarRating rating={promedio} size='star-large' />
                <p> {promedio.toFixed(1)} - {size} <strong className='text-green-700'>reseñas</strong></p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col mt-10 mx-[170px] w-auto shadow-lg overflow-auto pl-2 p-2'>
          <Navbar setFilter={setFilter} />
          <div className='flex flex-col px-6'>
            {filterResults.slice(0, 1).map((review, index) => (
              <RatingSeller
                key={index}
                description={review.comentario}
                date={review.fecha}
                rating={review.nota}
                image={review.foto}
                idProducto={review.idProducto}
                nombreComprador={review.nombreComprador}
                apellidoComprador={review.apellidoComprador}
              />
            ))}
            <div className='flex items-center justify-center'>
              {filterResults.length > 1 && (
                <button
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full"
                  onClick={() => setModalIsOpen(true)}
                >
                  Ver más
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Todas las calificaciones"
        className="fixed inset-0 flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="relative bg-white w-full max-w-4xl max-h-[80vh] p-8 mt-6 overflow-y-auto rounded-lg">
          <button className="absolute top-4 right-4 bg-gray-200  text-tertiary hover:bg-tertiary hover:text-white active:outline-neutral-300 focus:outline-neutral-300 rounded-full p-2 " onClick={() => setModalIsOpen(false)}>Cerrar</button>
          <h2 className="text-2xl font-bold mb-4">Todas las calificaciones</h2>
          <div className="flex flex-col px-2">
            {filterResults.map((review, index) => (
              <RatingSeller
                key={index}
                description={review.comentario}
                date={review.fecha}
                rating={review.nota}
                image={review.foto}
                idProducto={review.idProducto}
                nombreComprador={review.nombreComprador}
                apellidoComprador={review.apellidoComprador}
              />
            ))}
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Vendedor
