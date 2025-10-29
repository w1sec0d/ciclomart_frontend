import { useTranslation } from 'react-i18next'
import { Language } from '@mui/icons-material'
import { useState } from 'react'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    {
      code: 'es',
      name: 'Español',
      flag: 'es',
      flagUrl: 'https://flagcdn.com/w20/es.png',
    },
    {
      code: 'en',
      name: 'English',
      flag: 'us',
      flagUrl: 'https://flagcdn.com/w20/us.png',
    },
  ]

  const currentLanguage =
    languages.find((lang) => i18n.language.startsWith(lang.code)) ||
    languages[0]

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode)
    localStorage.setItem('language', langCode)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors bg-white text-black hover:bg-neutral-200 shadow-md"
        aria-label="Change language"
      >
        <Language />
        <img
          src={currentLanguage.flagUrl}
          alt={currentLanguage.name}
          className="w-5 h-auto"
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-20">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full text-left px-4 py-2 hover:bg-primary/10 first:rounded-t-lg last:rounded-b-lg flex items-center gap-2 transition-colors duration-300 ${
                  currentLanguage.code === lang.code ? 'font-bold' : ''
                }`}
              >
                <img
                  src={lang.flagUrl}
                  alt={lang.name}
                  className="w-5 h-auto"
                />
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default LanguageSwitcher
