// Translation mappings for database fields and values
// This keeps the DB in Spanish while providing bilingual UI

/**
 * Maps Spanish database field names to i18n translation keys
 * Usage: fieldNameMap[dbFieldName] returns the translation key
 */
export const fieldNameMap = {
    // Bicycle properties (from database schema)
    tipoBicicleta: 'products.bicycleType',
    color: 'products.color',
    genero: 'products.gender',
    edad: 'products.ageGroup',
    tamañoMarco: 'products.frameSize',
    materialMarco: 'products.frameMaterial',
    tamañoRueda: 'products.wheelSize',
    tipoFrenos: 'products.brakeType',
    velocidades: 'products.speeds',
    suspension: 'products.suspension',
    transmision: 'products.transmission',
    tipoPedales: 'products.pedalType',
    manubrio: 'products.handlebar',
    pesoBicicleta: 'products.bicycleWeight',
    pesoMaximo: 'products.maxWeight',
    extras: 'products.extras',

    // Product properties
    nombre: 'products.name',
    nombreMarca: 'products.brand',
    precio: 'products.price',
    estado: 'products.condition',
    categoria: 'products.category',
    compatibilidad: 'products.compatibility',
    disponibilidad: 'products.availability',
    exposicion: 'products.exposition',
    tipoProducto: 'products.productType',
    descripcionModelo: 'table.modelDescription',

    // Additional product fields (for comparison view)
    cantidad: 'products.quantity',
    ventas: 'products.sales',
    fechaPublicacion: 'products.publicationDate',
    tipo: 'products.productType',
    costoEnvio: 'products.shippingCost',
    precioCompleto: 'products.fullPrice',

    // Seller fields
    nombreVendedor: 'seller.name',
    apellidoVendedor: 'seller.lastName',
    correoVendedor: 'seller.email',
    telefonoVendedor: 'seller.phone',

    // Other fields
    preguntas: 'product.questions',
}

/**
 * Maps Spanish database values to i18n translation keys
 * Usage: fieldValueMap[dbFieldName][dbValue] returns the translation key
 */
export const fieldValueMap = {
    // Bicycle types
    tipoBicicleta: {
        'MTB': 'products.mountain',
        'Montaña': 'products.mountain',
        'Carretera': 'products.road',
        'Ruta': 'products.road',
        'ruta': 'products.road',
        'BMX': 'products.bmx',
        'Híbrida': 'products.hybrid',
        'Eléctrica': 'products.electric',
        'Plegable': 'products.folding',
    },

    // Frame sizes
    tamañoMarco: {
        'XS': 'products.frameXS',
        'S': 'products.frameS',
        'M': 'products.frameM',
        'L': 'products.frameL',
        'XL': 'products.frameXL',
    },

    // Frame materials
    materialMarco: {
        'Aluminio': 'products.aluminum',
        'Acero': 'products.steel',
        'Carbono': 'products.carbon',
        'Titanio': 'products.titanium',
    },

    // Brake types
    tipoFrenos: {
        'Disco': 'products.disc',
        'Disco hidráulico': 'products.discHydraulic',
        'Disco mecánico': 'products.discMechanical',
        'Caliper': 'products.caliper',
        'Herradura': 'products.conventional',
        'V-Brake': 'products.vBrake',
    },

    // Suspension types
    suspension: {
        'Ninguna': 'products.noSuspension',
        'Delantera': 'products.frontSuspension',
        'Doble': 'products.doubleSuspension',
        'Doble suspensión': 'products.doubleSuspension',
        'Rígida': 'products.rigid',
    },

    // Transmission types
    transmision: {
        'Monoplato': 'products.singleChainring',
        'Biplato': 'products.doubleChainring',
        'Triplato': 'products.tripleChainring',
        'Shimano': 'products.shimano',
        'SRAM': 'products.sram',
    },

    // Gender
    genero: {
        'Masculino': 'products.male',
        'Femenino': 'products.female',
        'Unisex': 'products.unisex',
    },

    // Age group
    edad: {
        'Adulto': 'products.adult',
        'Joven': 'products.youth',
        'Niño': 'products.child',
    },

    // Pedal types
    tipoPedales: {
        'Plataforma': 'products.platform',
        'Sin clip': 'products.clipless',
        'Mixtos': 'products.mixed',
    },

    // Handlebar types
    manubrio: {
        'Plano': 'products.flat',
        'Caída': 'products.drop',
        'Riser': 'products.riser',
    },

    // Product condition
    estado: {
        'nuevo': 'products.conditionNew',
        'usado': 'products.conditionUsed',
    },

    // Product availability
    disponibilidad: {
        'disponible': 'products.available',
        'vendido': 'products.sold',
        'reservado': 'products.reserved',
    },

    // Colors (common Spanish color names)
    color: {
        'Negro': 'products.colorBlack',
        'Negra': 'products.colorBlack',
        'Blanco': 'products.colorWhite',
        'Rojo': 'products.colorRed',
        'Azul': 'products.colorBlue',
        'Verde': 'products.colorGreen',
        'Amarillo': 'products.colorYellow',
        'Naranja': 'products.colorOrange',
        'Gris': 'products.colorGray',
        'Plata': 'products.colorSilver',
        'Dorado': 'products.colorGold',
    },

    tipoProducto: {
        'bicicleta': 'products.bicycle',
        'componente': 'products.component',
        'repuesto': 'products.sparePart',
    },

    categoria: {
        'carretera': 'products.road',
        'Carretera': 'products.road'
    },

    extras: {
        'ninguno': 'products.none',
        'Ninguno': 'products.none'
    },

    componente: {
        'Ruedas': 'products.wheels',
        'ruedas': 'products.wheels',
        'Transmisión': 'products.transmission',
        'Frenos': 'products.brakes',
        'Manubrio': 'products.handlebar',
        'Pedales': 'products.pedals',
        'Sillines': 'products.saddle',
        'Manubrios': 'products.handlebars',
        'Suspensión': 'products.suspension'
    }
}

/**
 * Gets the translation key for a field name
 * @param {string} fieldName - Spanish database field name
 * @returns {string} - Translation key or formatted field name
 */
export const getFieldTranslationKey = (fieldName) => {
    return fieldNameMap[fieldName] || null
}

/**
 * Gets the translation key for a field value
 * @param {string} fieldName - Spanish database field name
 * @param {string} value - Spanish database value
 * @returns {string} - Translation key or original value
 */
export const getValueTranslationKey = (fieldName, value) => {
    if (!fieldValueMap[fieldName]) return null
    return fieldValueMap[fieldName][value] || null
}

