// Form default values and configuration

/**
 * Get default form values for product publication
 * @param {string} type - Product type ('bicicleta' or 'componente')
 * @param {number} userId - Current user ID
 * @returns {Object} Default form values
 */
export const getProductFormDefaults = (type, userId) => ({
    // General fields
    nombre: '',
    tipo: type,
    cantidad: 1,
    exposicion: 0,
    descripcion: '',
    precio: '',
    imagenes: [],
    idMarca: '',
    modelo: '',
    disponibilidad: '',
    retiro: false,
    costoEnvio: '',
    estado: '',
    idVendedor: userId,

    // Bicycle-specific fields
    tipoBicicleta: '',
    color: '',
    genero: '',
    edad: '',
    tamañoMarco: '',
    materialMarco: '',
    modeloMarco: '',
    modeloRuedas: '',
    tamañoRueda: '',
    tipoFrenos: '',
    modeloFrenos: '',
    tipoManubrio: '',
    modeloManubrio: '',
    tipoSuspension: '',
    velocidades: '',
    transmision: '',
    tipoPedales: '',
    pesoBicicleta: '',
    pesoMaximo: '',
    modeloPedales: '',
    modeloCassette: '',
    modeloSillin: '',
    modeloCadena: '',
    extras: '',
    tarjeta: '',

    // Component-specific fields
    compatibilidad: '',
    categoria: '',
    marca: '',
})

/**
 * Extract bicycle-specific fields from form data
 * @param {Object} data - Form data
 * @returns {Object} Bicycle-specific fields
 */
export const extractBicycleFields = (data) => ({
    tipoBicicleta: data.tipoBicicleta,
    color: data.color,
    genero: data.genero,
    edad: data.edad,
    tamañoMarco: data.tamañoMarco,
    materialMarco: data.materialMarco,
    modeloMarco: data.modeloMarco,
    modeloRuedas: data.modeloRuedas,
    tamañoRueda: data.tamañoRueda,
    tipoFrenos: data.tipoFrenos,
    modeloFrenos: data.modeloFrenos,
    tipoManubrio: data.tipoManubrio,
    modeloManubrio: data.modeloManubrio,
    tipoSuspension: data.tipoSuspension,
    velocidades: data.velocidades,
    transmision: data.transmision,
    tipoPedales: data.tipoPedales,
    pesoBicicleta: data.pesoBicicleta,
    pesoMaximo: data.pesoMaximo,
    modeloPedales: data.modeloPedales,
    modeloCassette: data.modeloCassette,
    modeloSillin: data.modeloSillin,
    modeloCadena: data.modeloCadena,
    extras: data.extras,
    tarjeta: '',
})

/**
 * Extract component-specific fields from form data
 * @param {Object} data - Form data
 * @returns {Object} Component-specific fields
 */
export const extractComponentFields = (data) => ({
    compatibilidad: data.compatibilidad,
    modelo: data.modelo,
    categoria: data.categoria,
    marca: data.marca,
})

// Form step configuration
export const FORM_STEPS = {
    GENERAL_INFO: 1,
    PRODUCT_DETAILS: 2,
    AVAILABILITY: 3,
    TOTAL_STEPS: 3,
}

