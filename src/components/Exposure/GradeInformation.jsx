import { useTranslation } from 'react-i18next'

const GradeInformation = ({ grade }) => {
  const { t } = useTranslation()

  return (
    <div
      className={`${grade % 2 === 0 ? 'border-t-tertiary' : 'border-t-primary'} border-t py-8 px-4`}
    >
      <b className={`${grade % 2 === 0 ? 'text-tertiary' : 'text-primary'}`}>
        {t('exposure.grade').toUpperCase()} {grade}
      </b>
      <p>{t(`exposure.gradeDescriptions.${grade}`)}</p>
    </div>
  )
}

export default GradeInformation
