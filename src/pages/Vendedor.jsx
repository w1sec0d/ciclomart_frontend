import { useParams } from 'react-router-dom'
import Photo from '../assets/userPhoto.png'
import StarRating from '../components/StarRating'
import { useQuery } from 'react-query'
import ratingService from '../services/ratingService'
import Loading from '../components/Loading'
import { useState, useEffect } from 'react'

const Vendedor = () => {

  const { id } = useParams()

  const [promedio, setPromedio] = useState(0)
  const [size, setSize] = useState(0)
  const [positivas, setPositivas] = useState([])
  const [neutras, setNeutras] = useState([])
  const [negativas, setNegativas] = useState([])


  const getRatingSeller = async () => {
    try {
      const results  = await ratingService.getRatingSeller(id)

      const sumaNotas = results.reduce((suma, { nota }) => suma + nota, 0)
      const promedio = results.length ? sumaNotas / results.length : 0
      const size = (results.length === 1 && results[0].nota === null) ? 0 : results.length
      const positivas = results.filter(({ nota }) => nota >= 4)
      const neutras = results.filter(({ nota }) => nota === 3)
      const negativas = results.filter(({ nota }) => nota < 3)

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


  
  return (
      <div className="relative flex items-center justify-center  h-screen">
        <div className="flex flex-col w-[100%] h-full">
          <div className="flex items-center mt-8 mx-[170px] bg-lgray h-44 w-auto shadow-lg pl-20 on">
            <div className='flex relative ml-4'>
              <img 
                src={Photo}
                className='w-36 h-36 rounded-full'
                alt='Foto de perfil'
              />
            </div>
            <div className='flex flex-col lg:ml-[50px]'>
              <b className="text-4xl">Ronald Daniel </b>

              <div className='flex flex-row mt-5'>
                  <div className='flex flex-col'>
                      <StarRating rating={promedio} size='star-large'/>
                      <p> {promedio.toFixed(1)} - {size} <strong>reseñas</strong></p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Vendedor