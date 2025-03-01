import { useState, useEffect } from 'react'
import Button from './Button'
import logo from '../assets/logo.png'
import { Badge } from '@mui/material'
import { Person, ShoppingCart } from '@mui/icons-material'
import { useSelector, useDispatch } from 'react-redux'
import cartService from '../services/cartService'
import { setCart } from '../store/slices/cartSlice'

const Navbar = (params) => {
  const dispatch = useDispatch()
  // load user info to check if user is logged in
  const user = useSelector((state) => state.auth.authUser)
  const cartItemsCount = useSelector((state) => state.cart.items.length)

  const [inputText, setInputText] = useState('')

  const handleInputChange = (e) => {
    setInputText(e.target.value)
  }

  useEffect(() => {
    const fetchCartItems = async () => {
      if (user) {
        const elements = await cartService.getCart(user.idUsuario)
        dispatch(setCart(elements.results))
      }
    }

    fetchCartItems()
  }, [dispatch, user])

  return (
    <nav className="bg-primary p-4 font-medium shadow-md md:h-[64px] flex items-center justify-between fixed left-0 top-0 w-full z-10 text-lg">
      <ul className="flex flex-col md:flex-row w-full">
        <li className="mx-4 hover:font-bold hover:cursor-pointer flex items-center ">
          <img
            src={logo}
            alt="Logo de Ciclomart, un carrito de compras fusionado con una bicicleta"
            className="w-12 h-12 mr-4"
          />
          <a href="/">Inicio</a>
        </li>
        <li className="mr-4 hover:font-bold hover:cursor-pointer flex items-center border-l px-3 border-black/5 border-r">
          <a href="/conocenos">Conocenos</a>
        </li>

        {/*Barra de busqueda */}
        <div className="flexs mx-4 p-4 flex flex-wrap items-center justify-between">
          <Button
            className="border-[1px] text-white bg-secondary border-secondary mr-2 text-base hover:bg-transparent hover:text-secondary active:outline-neutral-300 focus:outline-neutral-300"
            to="/search/bycicle"
          >
            Explorar Bicicletas
          </Button>
          <Button
            className="border-[1px] text-white bg-secondary border-secondary mr-2 text-base hover:bg-transparent hover:text-secondary active:outline-neutral-300 focus:outline-neutral-300"
            to="/search/component"
          >
            Explorar Componentes
          </Button>
        </div>
        <li className="text-center mx-auto my-auto">
          {' '}
          <h1 className="w-full text-center text-sm my-auto">
            ¡Bienvenido a <span className="text-tertiary font-bold">Ciclo</span>
            <span className="text-secondary font-bold">Mart</span>! Tu{' '}
            <span className="font-bold">mercado bici </span>
            de <span className="font-bold">confianza</span>
          </h1>
        </li>
        {user ? (
          <li className="mx-4 hover:font-bold flex items-center">
            {user.rol == 'vendedor' ? (
              <Button
                className="border-[1px] text-tertiary bg-transparent border-tertiary mr-2 text-base hover:bg-tertiary hover:text-white active:outline-neutral-300 focus:outline-neutral-300"
                to="/publish"
              >
                Publicar
              </Button>
            ) : null}
            <Button
              className="border-[1px] text-tertiary bg-transparent border-tertiary mr-2 text-base hover:bg-tertiary hover:text-white active:outline-neutral-300 focus:outline-neutral-300"
              to="/shoppingCart"
            >
              <ShoppingCart />
              <Badge badgeContent={cartItemsCount} color="secondary" />
            </Button>
            <Button
              className="border-[1px] text-tertiary bg-transparent border-tertiary mr-2 text-base hover:bg-tertiary hover:text-white active:outline-neutral-300 focus:outline-neutral-300"
              to="/profile"
            >
              <Person />
              Perfil
            </Button>
          </li>
        ) : (
          <li className="hover:font-bold flex items-center">
            <Button
              className="border-[1px] text-white bg-tertiary border-tertiary mr-2 text-base hover:bg-transparent hover:text-tertiary active:outline-neutral-300 focus:outline-neutral-300"
              to="/login"
            >
              Inicia sesión
            </Button>
            <Button
              className="border-[1px] text-white bg-tertiary border-tertiary mr-2 text-base hover:bg-transparent hover:text-tertiary active:outline-neutral-300 focus:outline-neutral-300"
              to="/register"
            >
              Regístrate
            </Button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
