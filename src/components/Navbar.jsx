const Navbar = () => {
  return (
    <nav className="bg-primary p-4 font-medium shadow-md md:h-[64px] flex items-center fixed left-0 top-0 w-full z-10">
      <ul className="flex flex-col md:flex-row">
        <li className="mx-4 hover:font-bold">
          <a href="/">Home</a>
        </li>
        <li className="mx-4 hover:font-bold">
          <a href="/about">About</a>
        </li>
        <li className="mx-4 hover:font-bold">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
