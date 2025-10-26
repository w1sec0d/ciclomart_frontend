import { forwardRef } from 'react'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Footer = forwardRef((props, ref) => {
  const { t } = useTranslation()

  return (
    <footer ref={ref} className="w-full bg-primary">
      <div className="flex flex-col h-full w-full">
        <div className="container mx-auto py-4 flex flex-col md:flex-row pl-6 text-white">
          <ul className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-primaryDark md:mb-0 py-6 md:py-0">
            <h3 className="text-xl font-bold mb-4">{t('footer.legal')}</h3>
            <li>
              <Link
                to="/terms"
                className="hover:text-secondary hover:font-bold"
              >
                {t('footer.termsAndConditions')}
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="hover:text-secondary hover:font-bold"
              >
                {t('footer.privacyPolicy')}
              </Link>
            </li>
          </ul>
          <ul className="mtw-full md:w-1/3 md:ml-4 border-b md:border-b-0 md:border-r border-primaryDark mb-4 md:mb-0 py-6 md:py-0">
            <h3 className="text-xl font-bold mb-4">{t('footer.resources')}</h3>
            <li className="flex items-center flex-col lg:flex-row lg:gap-4 justify-center">
              <Link
                to="https://github.com/w1se0d/CicloMart_Back"
                target="_blank"
              >
                <div className="hover:text-secondary hover:font-bold flex flex-row justify-center items-center">
                  <p className="mr-2">{t('footer.githubBackend')}</p>
                  <FaGithub className="text-3xl" />
                </div>
              </Link>
              <Link
                to="https://github.com/w1sec0d/CicloMart_front"
                target="_blank"
              >
                <div className="hover:text-secondary hover:font-bold flex flex-row justify-center items-center">
                  <p className="mr-2">{t('footer.githubFrontend')}</p>
                  <FaGithub className="text-3xl" />
                </div>
              </Link>
            </li>
          </ul>
          <ul className="w-full md:w-1/3 md:ml-4 py-6 md:py-0">
            <h3 className="text-xl font-bold mb-4">{t('footer.developers')}</h3>
            <li>
              <Link
                to={'https://github.com/w1sec0d'}
                className="hover:text-secondary  hover:font-bold"
                target="_blank"
              >
                Carlos David Ramírez Muñoz
              </Link>
            </li>
            <li>
              <Link
                to={'https://github.com/Homeroso'}
                className="hover:text-secondary  hover:font-bold"
                target="_blank"
              >
                Johan David Rodríguez Gutíerrez
              </Link>
            </li>
            <li>
              <Link
                to={'https://github.com/RonaldDaniel20'}
                className="hover:text-secondary  hover:font-bold"
                target="_blank"
              >
                Ronald Daniel Jacanamejoy Mutumbajoy
              </Link>
            </li>
            <li>
              <Link
                to={'https://github.com/JuMad-SE'}
                className="hover:text-secondary  hover:font-bold"
                target="_blank"
              >
                Juan David Madrid Contreras
              </Link>
            </li>
          </ul>
        </div>
        <div className="py-4 w-full border-t border-primaryDark flex flex-col md:flex-row px-6">
          <p className="text-center text-white md:justify-start md:mr-auto mb-4 md:mb-0">
            &copy; 2025 - {t('footer.allRightsReserved')}
          </p>
          <p className="text-center text-white">
            {t('footer.support')}
            <Link
              to="mailto:ciclomartsoporte@gmail.com"
              className="font-bold hover:font-black"
            >
              {' '}
              ciclomartsoporte@gmail.com
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
})

Footer.displayName = 'Footer'

export default Footer
