import { useState } from 'react'
import Button from './Button'
import logo from '../assets/logo.png'
import { Person } from '@mui/icons-material'
import { useSelector } from 'react-redux'

const Navbar = (params) => {
  // load user info to check if user is logged in
  const user = useSelector((state) => state.auth.authUser)
  
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <nav className="bg-white p-4 font-medium shadow-md md:h-[64px] flex items-center justify-between fixed left-0 top-0 w-full z-10 text-lg">
      <ul className="flex flex-col md:flex-row w-full">
        <li className="mx-4 hover:font-bold hover:cursor-pointer flex items-center">
          <img
            src={logo}
            alt="Logo de Ciclomart, un carrito de compras fusionado con una bicicleta"
            className="w-12 h-12 mr-4"
          />
          <a href="/">Inicio</a>
        </li>
        <li className="mx-4 hover:font-bold hover:cursor-pointer flex items-center">
          <a href="/about">Acerca de</a>
        </li>
        <li className="mx-4 hover:font-bold hover:cursor-pointer flex items-center">
          <a href="/contact">Contacto</a>
        </li>

        {/*Barra de busqueda */}
        <div className="flexs mx-4 p-4 flex flex-wrap items-center justify-between">
          <input 
            type="search"
            className="flex m-0 w-1/2"
            placeholder="Buscar"
            aria-label="Buscar"
            value={inputText}
            onChange={handleInputChange}
          />
          <Button 
            className="flex mx-2 rounded-r px-6 py-2 text-xs uppercase text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5"
            to="/search"
            onClick={() => params.onSearch(inputText)}>
            Buscar
          </Button>
        </div>
        
        <li className="text-center mx-auto">
          {' '}
          <h1 className="w-full text-center text-lg py-4">
            ¡Bienvenido a <span className="text-tertiary font-bold">Ciclo</span>
            <span className="text-secondary font-bold">Mart</span>! Tu{' '}
            <span className="font-bold">mercado bici </span>
            de <span className="font-bold">confianza</span>
          </h1>
        </li>
        {user ? (
          <li className="mx-4 hover:font-bold flex items-center">
            <Button className="bg-tertiary px-8" to="/profile">
              <Person />
              Perfil
            </Button>
          </li>
        ) : (
          <li className="hover:font-bold flex items-center ml-auto">
            <Button
              className="border-[1px] text-tertiary bg-transparent border-tertiary mr-2 text-base hover:bg-tertiary hover:text-white active:hover:bg-tertiary-dark"
              to="/login"
            >
              Inicia sesión
            </Button>
            <Button
              className="border-[1px] text-tertiary bg-transparent border-tertiary mr-2 text-base hover:bg-tertiary hover:text-white active:hover:bg-tertiary-dark"
              to="/register"
            >
              Regístrate
            </Button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar
