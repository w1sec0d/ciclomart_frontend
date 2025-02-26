import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useState } from 'react'

// componentes
import Loading from '../../components/Loading'
import Button from '../../components/Button'
import Img from '../../components/Img'
import { Favorite, FavoriteBorder } from '@mui/icons-material'
import ProductRating from '../ProductRating'
import Input from '../../components/Input'

// servicios
import { getProductById } from '../../services/productService'
import mercadoPago from '../../services/mercadoPago'
import shoppingCart from '../../services/cartService'

// utils
import colombianPrice from '../../utils/colombianPrice'
import { clearLoading, setLoading } from '../../store/slices/loadingSlice'
import capitalize from '../../utils/capitalize'

import { addItem } from '../../store/slices/cartSlice'

const ProductPage = () => {
  // Obtiene el id del producto de los parámetros de la URL
  const { id } = useParams()
  const dispatch = useDispatch()
  const authUser = useSelector((state) => state.auth.authUser)
  const cartItems = useSelector((state) => state.cart.items)
  const [cantidad, setCantidad] = useState(1)

  // Hace fetch del producto con react-query
  const {
    data: producto,
    isLoading,
    isError,
  } = useQuery(['productos', id], () => getProductById(id))

  const handleBuy = async () => {
    dispatch(setLoading())
    if (!authUser) {
      dispatch(
        setNotification({
          title: 'Debes iniciar sesión para comprar',
          icon: 'error',
        })
      )
      dispatch(clearLoading())
      return
    }
    console.log('producto', producto)
    const { paymentURL } = await mercadoPago.sendBuyRequest(
      producto,
      authUser.idUsuario
    )
    window.location.href = paymentURL
    setTimeout(() => {
      dispatch(clearLoading())
    }, 5000)
  }

  const handleAddToCart = async () => {
    // Verificar si el usuario está autenticado

    if (!authUser) {
      dispatch(
        setNotification({
          title: '¡UPS!',
          text: 'Debes iniciar sesión primero para poder agregar al carrito',
          icon: 'error',
          timer: 3000,
        })
      )

      return
    }

    const idUsuario = authUser.idUsuario
    const idProducto = producto.idProducto

    //Verificar que la cantidad de producto en el carrito no exceda la cantidad disponible

    const existingItem = cartItems.find((item) => item.id === idProducto)
    const existingQuantity = existingItem ? existingItem.cantidad : 0
    const totalQuantity = existingQuantity + cantidad

    if (totalQuantity > producto.cantidad) {
      dispatch(
        setNotification({
          title: '¡UPS!',
          text: `No puedes agregar más de ${producto.cantidad} unidades de este producto.`,
          icon: 'error',
          timer: 3000,
        })
      )
      return
    }

    // Agregar el producto al carrito

    const item = {
      id: producto.idProducto,
      nombre: producto.nombre,
      cantidad: cantidad,
      precio_unitario: producto.precio,
    }

    dispatch(addItem(item))
    await shoppingCart.addProductToCart(idUsuario, idProducto, cantidad)

    // Sync the cart with localStorage
    const updatedCart = [...cartItems, item]
    localStorage.setItem('cart', JSON.stringify(updatedCart))

    dispatch(
      setNotification({
        title: '¡Éxito!',
        text: 'Producto agregado al carrito',
        icon: 'success',
        timer: 3000,
      })
    )
  }

  if (isLoading) return <Loading />
  if (isError) return <p>Error: {isError.message}</p>

  return (
    <section className="px-10">
      <div className="flex justify-evenly items-center py-10">
        <Img
          src={producto.imagenURL}
          alt={'Imagen del producto: ' + producto.nombre}
          className="max-w-[500px] max-h-[500px]"
        />
        <div className="p-4">
          <div className="flex items-center">
            <div>
              <h1 className="text-2xl font-bold tracking-wide">
                {producto.nombre}
              </h1>
              <p className="text-2xl text-gray-700 tracking-wide">
                {colombianPrice(producto.precio)}
              </p>
            </div>
            <FavoriteBorder
              sx={{ fontSize: 40, color: 'gray', marginLeft: 4 }}
            />
          </div>
          {/* Detalles del producto */}
          <div className="my-2 tracking-wide">
            <p>
              <b>Marca</b>: {producto.nombreMarca ?? 'Genérica'}
            </p>
            <p>
              <b>Tipo</b>: {capitalize(producto.tipo)}
            </p>
            <p>
              <b>Estado</b>:{' '}
              {producto.disponibilidad === 'disponible'
                ? 'Disponible'
                : 'No Disponible'}
            </p>
            <p>
              <b>Publicado el: </b>
              {new Date(producto.fechaPublicacion).toLocaleDateString()}
            </p>
          </div>
          <div className="flex items-center flex-row">
            <Input
              type="number"
              label="Cantidad"
              id="cantidad"
              name="cantidad"
              value={cantidad}
              onChange={(e) => setCantidad(Number(e.target.value))}
              min="1"
              max={producto.cantidad}
              className="mt-1 my-4 block w-1/3"
            />
            <Button className="mx-3" onClick={handleAddToCart}>
              🛒+{' '}
            </Button>
            <Button className="mx-3" onClick={handleBuy}>
              Comprar
            </Button>
          </div>
        </div>
      </div>
      <div className="py-4">
        <b>Descripción:</b>
        <p>
          {producto.descripcionModelo ||
            'Este producto no tiene descripción aún.'}
        </p>
      </div>
      <div>
        <ProductRating />
      </div>
    </section>
  )
}

export default ProductPage
