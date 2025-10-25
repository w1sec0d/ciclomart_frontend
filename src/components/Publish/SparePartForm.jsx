import { useTranslation } from 'react-i18next'
import filters from '../../utils/newFilters'
import Input from '../Input'
import CustomSelect from './Select'

const SparePartForm = ({ componentData, register }) => {
  const { t } = useTranslation()

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <CustomSelect
          name="compatibilidad"
          label={t('publish.compatibility')}
          options={filters['componente'].compatibilidad}
          {...register('compatibilidad')}
        />
        <CustomSelect
          name="categoria"
          label={t('publish.category')}
          options={filters['componente'].categoria}
          {...register('categoria')}
        />
      </div>
    </>
  )
}

export default SparePartForm
