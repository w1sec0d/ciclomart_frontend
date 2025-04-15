import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Link } from 'react-router-dom'

const Team = ({ photo, name, description, phrase, linkedin }) => {
  return (
    <div className="h-176 w-[300px] border border-primary/60 mt-4 mb-4 rounded-2xl flex flex-col relative">
      <section className="h-60 w-full flex flex-col justify-center items-center relative">
        <div
          className="absolute top-0 left-0 h-full w-full filter blur-sm bg-cover bg-center rounded-1xl  z-0"
          style={{
            backgroundImage: `url(${photo})`,
          }}
        />
        <img
          src={photo}
          className="rounded-full h-48 w-48 mt-40 object-cover relative"
          style={{
            objectFit: 'cover',
          }}
        />
        <h2 className="font-bold mt-2 relative">{name}</h2>
        <p className="relative">Desarrollador Full-Stack</p>
      </section>
      <hr className="w-full border-primary/60 mt-24 relative" />
      <section className="h-60 w-full flex flex-col items-center mt-10">
        <h1 className="font-bold mb-3 text-sm">Acerca de mí</h1>
        <div className="flex flex-col space-y-2 ml-4 mr-4 justify-center items-center">
          <p className="text-sm text-center mb-5">{description}</p>
          <p className="text-sm font-bold text-center mb-5">{phrase}</p>
        </div>
      </section>
      <section className="flex items-center justify-center mt-2 relative">
        <Link to={linkedin} target="_blank" rel="noopener noreferrer">
          <LinkedInIcon style={{ position: 'static', marginTop: '10px' }} />
        </Link>
      </section>
    </div>
  )
}

export default Team