// Components
import ExposurePrice from '../components/Exposure/ExposurePrice'
import GradeInformation from '../components/Exposure/GradeInformation'
import { useTranslation } from 'react-i18next'

const ExposureInfo = () => {
  const { t } = useTranslation()

  return (
    <div className="w-full h-auto flex flex-col">
      <div className="bg-secondary h-14 w-full  flex items-center justify-center drop-shadow-lg">
        <h1 className="text-xl font-bold">
          {t('exposure.exposureGradesInCiclomart')}
        </h1>
      </div>
      <div className="flex flex-col h-auto w-full mt-8 mb-8">
        <div>
          <h2 className="font-bold bg-tertiary py-3 px-3  rounded-tr-xl w-64 drop-shadow-lg">
            {t('exposure.exposureGrades')}
          </h2>
        </div>
        <div className="mt-4 ">
          <p>
            {t('exposure.exposureGradesDescription')}{' '}
            <span className="inline-block text-primary font-bold">
              {t('exposure.checkOurPaymentOptions')}{' '}
            </span>
          </p>
        </div>
      </div>

      {/* Exposure grades and selection */}
      <div className=" bg-lgray/[.37] w-full h-auto ">
        <div className="mb-20">
          <h2 className="bg-primary  py-3 px-3 font-bold rounded-tr-xl w-64 drop-shadow-lg ">
            {t('exposure.paymentMethods')}
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-16 pb-8 px-8">
          <ExposurePrice grade={1} />
          <ExposurePrice grade={2} />
          <ExposurePrice grade={3} />
          <ExposurePrice grade={4} />
        </div>
      </div>

      {/* How does it work? Grade information to give info to the seller */}
      <div className="flex flex-col">
        <div className="mb-4">
          <h2 className="bg-tertiary w-64 rounded-tr-xl mt-5 py-3 px-3 font-bold drop-shadow-lg">
            {t('exposure.howDoesItWork')}
          </h2>
        </div>
        <GradeInformation grade={0} />
        <GradeInformation grade={1} />
        <GradeInformation grade={2} />
        <GradeInformation grade={3} />
        <GradeInformation grade={4} />
      </div>
    </div>
  )
}

export default ExposureInfo
