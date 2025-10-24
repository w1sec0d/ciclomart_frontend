import { useTranslation } from 'react-i18next'
import { Language } from '@mui/icons-material'
import { useState } from 'react'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
  ]

  const currentLanguage =
    languages.find((lang) => i18n.language.startsWith(lang.code)) ||
    languages[0]

  console.log('currentLanguage', i18n.language)

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode)
    localStorage.setItem('language', langCode)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors bg-white text-black hover:bg-gray-100 shadow-md"
        aria-label="Change language"
      >
        <Language />
        <span className="hidden sm:inline">{currentLanguage.flag}</span>
        <span className="sm:hidden">{currentLanguage.flag}</span>
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
                <span className="text-xl">{lang.flag}</span>
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
