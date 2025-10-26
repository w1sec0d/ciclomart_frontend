// Components
import Philosophy from '../components/About/Philosophy'
import ValueCard from '../components/About/ValueCard'
import TeamMemberCard from '../components/About/TeamMemberCard'

// Icons
import Security from '@mui/icons-material/GppGoodOutlined'
import Persons from '@mui/icons-material/PeopleAltOutlined'
import Contact from '@mui/icons-material/ContactMailOutlined'
import Bicycle from '@mui/icons-material/DirectionsBikeOutlined'
import Information from '@mui/icons-material/HelpOutlineOutlined'
import Mision from '@mui/icons-material/ShoppingCartOutlined'
import Vision from '@mui/icons-material/PedalBikeOutlined'

// Team photos
import daniel from '../assets/Daniel.png'
import johan from '../assets/Johan.png'
import juan from '../assets/Juan.jpeg'
import carlos from '../assets/Carlos.png'

// Logo
import Logo from '../assets/Logo.svg'

// i18n
import { useTranslation } from 'react-i18next'

const Conocenos = () => {
  const { t } = useTranslation()
  return (
    <div className="h-auto w-full flex flex-col justify-center md:px-20 px-5">
      {/* Value proposition */}
      <div className="h-auto bg-white shadow-xl w-full mt-8 mb-12 md:rounded-full rounded-xl flex md:flex-row flex-col items-center py-4 md:pl-4 px-2 md:pr-32 border border-primary/60">
        <div className="rounded-full h-full w-1/3 bg-white shadow-xl mr-8 ">
          <img src={Logo} className="h-full object-fill w-full " />
        </div>
        <div className="flex flex-col h-full items-center justify-center w-full px-8 md:px-5">
          <div className="w-full">
            <h1 className="font-bold  w-full text-2xl md:text-5xl mt-5 md:mt-2 text-primary text-left">
              {t('aboutUs.whatDoesCiclomart')}
            </h1>
          </div>

          <ul className="list-disc mt-8 text-xl mb-4">
            <li>
              <p className="text-primary font-bold">
                {t('aboutUs.valueProposition1')}
              </p>
            </li>
            <li>{t('aboutUs.valueProposition2')}</li>
            <li>{t('aboutUs.valueProposition3')}</li>
          </ul>
        </div>
        <p></p>
      </div>

      {/* Vision */}
      <Philosophy name={t('aboutUs.vision')} Icon={Vision}>
        <p>{t('aboutUs.visionText')}</p>
      </Philosophy>
      {/* Mission */}
      <Philosophy name={t('aboutUs.mission')} Icon={Mision}>
        <p>{t('aboutUs.missionText')}</p>
      </Philosophy>

      <div className="h-12 w-full bg-primary flex items-center justify-center mt-8 rounded-xl">
        <h2 className="font-bold text-2xl">{t('aboutUs.values')}</h2>
      </div>

      {/* Values */}
      <div className="flex flex-col h-auto md:flex-none">
        <div className="flex flex-col md:flex-row md:space-x-4 mt-10 md:mb-3 w-full md:h-72 h-auto md:flex-nowrap">
          <ValueCard title={t('aboutUs.transparency')} Icon={Information}>
            {t('aboutUs.transparencyText')}
          </ValueCard>
          <ValueCard title={t('aboutUs.accessibility')} Icon={Persons}>
            {t('aboutUs.accessibilityText')}
          </ValueCard>
          <ValueCard
            title={t('aboutUs.environmentalCommitment')}
            Icon={Bicycle}
          >
            {t('aboutUs.environmentalCommitmentText')}
          </ValueCard>
        </div>
        <div className="flex md:flex-row flex-col md:space-x-4 w-full items-center md:justify-center mb-10 md:h-72 h-auto">
          <ValueCard title={t('aboutUs.trust')} Icon={Contact}>
            {t('aboutUs.trustText')}
          </ValueCard>
          <ValueCard title={t('aboutUs.security')} Icon={Security}>
            {t('aboutUs.securityText')}
          </ValueCard>
        </div>
      </div>

      <div className="h-12 w-full bg-primary flex items-center justify-center mt-8 rounded-xl">
        <h2 className="font-bold text-2xl">{t('aboutUs.ourTeam')}</h2>
      </div>
      <div className="flex flex-col sm:flex-row sm:space-x-10 items-center justify-center mt-10 mb-3 w-full space-y-8 sm:space-y-0">
        <TeamMemberCard
          photo={daniel}
          name={'Ronald Daniel Jacanamejoy'}
          description={t('aboutUs.danielDescription')}
          phrase={`"${t('aboutUs.danielPhrase')}"`}
          linkedin={
            'https://www.linkedin.com/in/ronald-daniel-jacanamejoy-mutumbajoy-29b2442b4/'
          }
          github={'https://github.com/RonaldDaniel20'}
        />

        <TeamMemberCard
          photo={juan}
          name={'Juan David Madrid Contreras'}
          description={t('aboutUs.juanDescription')}
          phrase={`"${t('aboutUs.juanPhrase')}"`}
          linkedin={'https://www.linkedin.com/in/jumad-se/'}
          github={'https://github.com/JuMad-SE'}
        />
        <TeamMemberCard
          photo={carlos}
          name={'Carlos David Ramirez Muñoz'}
          description={t('aboutUs.carlosDescription')}
          phrase={`"${t('aboutUs.carlosPhrase')}"`}
          linkedin={'https://www.linkedin.com/in/cramirezmun/'}
          github={'https://github.com/w1sec0d'}
        />
        <TeamMemberCard
          photo={johan}
          name={'Johan Rodriguez Gutierrez'}
          description={t('aboutUs.johanDescription')}
          phrase={`"${t('aboutUs.johanPhrase')}"`}
          linkedin={
            'https://www.linkedin.com/in/johan-david-rodriguez-gutierrez-a55738279/'
          }
          github={'https://github.com/Homeroso'}
        />
      </div>
    </div>
  )
}

export default Conocenos
