import React from 'react'
import { useTranslation } from 'react-i18next'
import filters from '../../utils/newFilters'
import Input from '../Input'
import CustomSelect from './Select'
import TextArea from '../TextArea'

const BycicleForm = ({ bycicle, register }) => {
  const { t } = useTranslation()

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <CustomSelect
          name="tipoBicicleta"
          label={t('publish.type')}
          options={filters['bicicleta'].tipo}
          {...register('tipoBicicleta')}
          required={false}
        />
        <CustomSelect
          name="color"
          label={t('products.color')}
          options={filters['bicicleta'].color}
          {...register('color')}
          required={false}
        />
        <CustomSelect
          name="genero"
          label={t('products.gender')}
          options={filters['bicicleta'].genero}
          {...register('genero')}
          required={false}
        />
        <CustomSelect
          name="edad"
          label={t('products.ageGroup')}
          options={filters['bicicleta'].edad}
          {...register('edad')}
          required={false}
        />
      </div>

      <h3 className="text-xl mt-8 text-primary justify-self-stretch">
        {t('publish.frameDetails')}
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <Input
          type="number"
          id="tamañoMarco"
          label={t('publish.frameSizeCm')}
          {...register('tamañoMarco')}
          required={false}
        />
        <CustomSelect
          name="materialMarco"
          label={t('publish.frameMaterialLabel')}
          options={filters['bicicleta'].materialMarco}
          {...register('materialMarco')}
          required={false}
        />
      </div>

      <h3 className="text-xl mt-8 text-primary justify-self-stretch">
        {t('publish.wheelDetails')}
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <Input
          type="number"
          id="tamañoRueda"
          label={t('publish.wheelSizeLabel')}
          {...register('tamañoRueda')}
          required={false}
        />
      </div>

      <h3 className="text-xl mt-8 text-primary justify-self-stretch">
        {t('publish.transmissionDetails')}
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <CustomSelect
          name="transmision"
          label={t('publish.transmissionLabel')}
          options={filters['bicicleta'].transmision}
          {...register('transmision')}
          required={false}
        />
        <CustomSelect
          name="tipoPedales"
          label={t('publish.pedalsLabel')}
          options={filters['bicicleta'].pedales}
          {...register('tipoPedales')}
          required={false}
        />
        <Input
          type="number"
          id="velocidades"
          label={t('publish.numberOfSpeeds')}
          {...register('velocidades')}
          required={false}
        />
      </div>

      <h3 className="text-xl mt-8 text-primary justify-self-stretch">
        {t('publish.suspensionDetails')}
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <CustomSelect
          name="tipoSuspension"
          label={t('publish.suspensionLabel')}
          options={filters['bicicleta'].suspension}
          {...register('tipoSuspension')}
          required={false}
        />
      </div>

      <h3 className="text-xl mt-8 text-primary justify-self-stretch">
        {t('publish.brakeDetails')}
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <CustomSelect
          name="tipoFrenos"
          label={t('publish.brakeTypeLabel')}
          options={filters['bicicleta'].frenos}
          {...register('tipoFrenos')}
          required={false}
        />
      </div>

      <h3 className="text-xl mt-8 text-primary justify-self-stretch">
        {t('publish.weightDetails')}
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <Input
          type="number"
          id="pesoBicicleta"
          label={t('publish.bicycleWeightKg')}
          {...register('pesoBicicleta')}
          required={false}
        />
        <Input
          type="number"
          id="pesoMaximo"
          label={t('publish.maxSupportedWeightKg')}
          {...register('pesoMaximo')}
          required={false}
        />
      </div>

      <h3 className="text-xl mt-8 text-primary justify-self-stretch">
        {t('publish.handlebarDetails')}
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <CustomSelect
          name="tipoManubrio"
          label={t('publish.handlebarTypeLabel')}
          options={filters['bicicleta'].manubrio}
          {...register('tipoManubrio')}
          required={false}
        />
      </div>

      <h3 className="text-xl mt-8 text-primary justify-self-stretch">
        {t('publish.additional')}
      </h3>

      <TextArea
        id="extras"
        label={t('publish.extrasLabel')}
        {...register('extras')}
      />
    </>
  )
}

export default BycicleForm
