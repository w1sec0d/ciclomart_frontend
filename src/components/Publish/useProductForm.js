// Custom hook for product form logic
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import publicationService from '../../services/publicationService'
import { setNotification } from '../../store/slices/notificationSlice'
import { FORM_STEPS, extractBicycleFields, extractComponentFields } from './formDefaults'

/**
 * Custom hook for managing product form state and operations
 * @param {string} type - Product type ('bicicleta' or 'componente')
 * @param {Function} onSubmit - Callback when form is submitted
 * @returns {Object} Form state and handlers
 */
export const useProductForm = (type, onSubmit) => {
    const dispatch = useDispatch()
    const [step, setStep] = useState(FORM_STEPS.GENERAL_INFO)
    const [isAddingBrand, setIsAddingBrand] = useState(false)

    /**
     * Handle form submission
     * @param {Object} data - Form data
     */
    const handleFormSubmit = (data) => {
        let productSpecificFields = {}

        if (type === 'bicicleta') {
            productSpecificFields = extractBicycleFields(data)
        } else if (type === 'componente') {
            productSpecificFields = extractComponentFields(data)
        }

        onSubmit(data, productSpecificFields)
    }

    /**
     * Add a new brand with error handling
     * @param {string} brandName - Name of the brand to add
     * @param {Function} refreshBrands - Callback to refresh brands list
     */
    const handleAddBrand = async (brandName, refreshBrands) => {
        if (!brandName || !brandName.trim()) {
            dispatch(
                setNotification({
                    title: 'Error',
                    text: 'Por favor ingresa un nombre de marca',
                    icon: 'error',
                })
            )
            return
        }

        setIsAddingBrand(true)

        try {
            const response = await publicationService.addBrand(brandName.trim())

            if (response.success) {
                dispatch(
                    setNotification({
                        title: 'Éxito',
                        text: 'Marca agregada correctamente',
                        icon: 'success',
                        timer: 2000,
                    })
                )
                // Refresh the brands list
                await refreshBrands()
            }
        } catch (error) {
            console.error('Error adding brand:', error)
            dispatch(
                setNotification({
                    title: 'Error',
                    text: 'No se pudo agregar la marca. Intenta nuevamente.',
                    icon: 'error',
                })
            )
        } finally {
            setIsAddingBrand(false)
        }
    }

    /**
     * Navigate to next step
     */
    const handleNext = () => {
        if (step < FORM_STEPS.TOTAL_STEPS) {
            setStep(step + 1)
        }
    }

    /**
     * Navigate to previous step
     */
    const handlePrevious = () => {
        if (step > FORM_STEPS.GENERAL_INFO) {
            setStep(step - 1)
        }
    }

    /**
     * Check if current step is the first step
     */
    const isFirstStep = step === FORM_STEPS.GENERAL_INFO

    /**
     * Check if current step is the last step
     */
    const isLastStep = step === FORM_STEPS.TOTAL_STEPS

    return {
        step,
        isAddingBrand,
        isFirstStep,
        isLastStep,
        handleFormSubmit,
        handleAddBrand,
        handleNext,
        handlePrevious,
        FORM_STEPS,
    }
}

