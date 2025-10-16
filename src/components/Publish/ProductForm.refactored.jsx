import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

import BycicleForm from './BycicleForm'
import SparePartForm from './SparePartForm'
import GeneralInfo from './GeneraInfo'
import AvailabilityForm from './AvailabilityForm'
import Button from '../Button'

import { getProductFormDefaults, FORM_STEPS } from './formDefaults'
import { useProductForm } from './useProductForm'

/**
 * ProductForm - Multi-step form for publishing products
 * @param {Object} props
 * @param {string} props.type - Product type ('bicicleta' or 'componente')
 * @param {Function} props.onSubmit - Callback when form is submitted
 * @param {Object} props.models - Available product models
 * @param {Object} props.brands - Available brands
 * @param {Function} props.getBrands - Function to refresh brands list
 */
const ProductForm = ({ type, onSubmit, models, brands, getBrands }) => {
  const authUser = useSelector((state) => state.auth.authUser)

  // Form management
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: getProductFormDefaults(type, authUser.idUsuario),
  })

  // Custom hook for form logic
  const {
    step,
    isAddingBrand,
    isFirstStep,
    isLastStep,
    handleFormSubmit,
    handleAddBrand,
    handleNext,
    handlePrevious,
  } = useProductForm(type, onSubmit)

  const product = watch()

  /**
   * Handle image file selection
   */
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files)
    setValue('imagenes', files)

    const previews = files.map((file) => URL.createObjectURL(file))
    setValue('imagePreviews', previews)
  }

  /**
   * Handle brand selection change
   */
  const handleBrandChange = (e) => {
    setValue('marca', e.target.value)
    setValue('idMarca', e.target.id)
  }

  /**
   * Wrapper for handleAddBrand with getBrands callback
   */
  const onAddBrand = (brandName) => {
    return handleAddBrand(brandName, getBrands)
  }

  return (
    <div className="flex items-center justify-center w-full lg:min-h-screen bg-gradient-to-t from-primary/95 to-zinc-100 from-50% to-50%">
      <div className="flex flex-col items-center justify-center w-full max-w-4xl pb-6 bg-zinc-100 rounded-lg mt-4 mb-8 shadow-lg shadow-black/35">
        {/* Header */}
        <div className="w-full h-14 bg-primary rounded-t-lg flex items-center justify-center drop-shadow-lg">
          <h1 className="text-2xl font-bold">
            Publicar {type} - Paso {step} de {FORM_STEPS.TOTAL_STEPS}
          </h1>
        </div>

        <div className="w-full px-4 md:px-20">
          {/* Form Steps */}
          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="w-full space-y-5 p-4"
          >
            {step === FORM_STEPS.GENERAL_INFO && (
              <GeneralInfo
                product={product}
                register={register}
                handleImageChange={handleImageChange}
                brands={brands}
                handleBrandChange={handleBrandChange}
                handleAddBrand={onAddBrand}
              />
            )}

            {step === FORM_STEPS.PRODUCT_DETAILS && (
              <>
                {type === 'bicicleta' && (
                  <BycicleForm bycicle={product} register={register} />
                )}
                {type === 'componente' && (
                  <SparePartForm componentData={product} register={register} />
                )}
              </>
            )}

            {step === FORM_STEPS.AVAILABILITY && (
              <AvailabilityForm product={product} register={register} />
            )}
          </form>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-4">
            {!isFirstStep && (
              <Button
                type="button"
                onClick={handlePrevious}
                className="justify-center mr-2"
                disabled={isAddingBrand}
              >
                Anterior
              </Button>
            )}

            {!isLastStep ? (
              <Button
                type="button"
                onClick={handleNext}
                className="justify-center ml-auto"
                disabled={isAddingBrand}
              >
                Siguiente
              </Button>
            ) : (
              <Button
                type="submit"
                onClick={handleSubmit(handleFormSubmit)}
                className="justify-center ml-auto"
                disabled={isAddingBrand}
              >
                {isAddingBrand ? 'Procesando...' : 'Publicar'}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductForm
