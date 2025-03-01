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

  return (
    <nav className="bg-primary p-4 font-medium shadow-md md:h-[64px] flex items-center justify-between fixed left-0 top-0 w-full z-10 text-lg">
      <ul className="flex flex-col md:flex-row w-full  justify-center ">
        <li className="mx-4  flex flex-row items-center w-3/12">
          <img
            src={logo}
            alt="Logo de Ciclomart, un carrito de compras fusionado con una bicicleta"
            className="w-12 h-12 mr-6"
          />
          <a href="/" className="hover:font-bold mr-4">
            Inicio
          </a>
          <a
            href="/conocenos"
            className="mr-4 hover:font-bold hover:cursor-pointer flex items-center border-l px-3 border-black/5 border-r mr-auot"
          >
            Conocenos
          </a>
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
          <li className="hover:font-bold flex flex-row items-center justify-end w-3/12 ">
            <Button
              className=" text-white bg-tertiary mr-2 text-base outline-none focus:outline-primary active:outline-primary hover:bg-tertiary/90"
              to="/login"
            >
              Inicia sesión
            </Button>
            <Button
              className=" text-white bg-tertiary mr-2 text-base outline-none focus:outline-primary active:outline-primary hover:bg-tertiary/90"
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
