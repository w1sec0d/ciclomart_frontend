const filters = {
  bicicleta: {
    tipo: {
      label: 'products.bicycleType',
      options: [
        { value: 'montaña', labelKey: 'products.mountain' },
        { value: 'ruta', labelKey: 'products.road' },
        { value: 'bmx', labelKey: 'products.bmx' },
        { value: 'electrica', labelKey: 'products.electric' },
      ],
    },

    color: {
      label: 'products.color',
      options: [
        { value: '#FF7F7B', labelKey: 'products.red' },
        { value: '#A2FF75', labelKey: 'products.green' },
        { value: '#5A67FF', labelKey: 'products.blue' },
        { value: '#F5FF78', labelKey: 'products.yellow' },
        { value: '#B471FF', label: 'Magenta' },
        { value: '#8BFFFF', label: 'Cyan' },
        { value: '#000000', label: 'Negro' },
        { value: '#FFFFFF', label: 'Blanco' },
        { value: '#808080', label: 'Gris' },
        { value: '#FFB760', label: 'Naranja' },
      ],
    },

    genero: {
      label: 'products.gender',
      options: [
        { value: 'hombre', labelKey: 'products.male' },
        { value: 'mujer', labelKey: 'products.female' },
        { value: 'unisex', labelKey: 'products.unisex' },
      ],
    },

    edad: {
      label: 'products.ageGroup',
      options: [
        { value: 'adulto', labelKey: 'products.adult' },
        { value: 'niño', labelKey: 'products.child' },
        { value: 'adolescente', labelKey: 'products.youth' },
      ],
    },

    materialMarco: {
      label: 'products.frameMaterial',
      options: [
        { value: 'aluminio', labelKey: 'products.aluminum' },
        { value: 'carbono', labelKey: 'products.carbon' },
        { value: 'titanio', labelKey: 'products.titanium' },
        { value: 'acero', labelKey: 'products.steel' },
      ],
    },

    suspension: {
      label: 'products.suspension',
      options: [
        { value: 'delantera', labelKey: 'products.front' },
        { value: 'trasera', label: 'Trasera' },
        { value: 'doble', labelKey: 'products.double' },
        { value: 'ninguna', labelKey: 'products.noSuspension' },
      ],
    },

    transmision: {
      label: 'products.transmission',
      options: [
        { value: 'monoplato', labelKey: 'products.singleChainring' },
        { value: 'doble', labelKey: 'products.doubleChainring' },
        { value: 'triple', labelKey: 'products.tripleChainring' },
      ],
    },

    frenos: {
      label: 'products.brakeType',
      options: [
        { value: 'disco', labelKey: 'products.disc' },
        { value: 'convencional', labelKey: 'products.conventional' },
      ],
    },

    pedales: {
      label: 'products.pedalType',
      options: [
        { value: 'automaticos', labelKey: 'products.clipless' },
        { value: 'plataforma', labelKey: 'products.platform' },
        { value: 'jaula', label: 'Jaula' },
      ],
    },

    manubrio: {
      label: 'products.handlebar',
      options: [
        { value: 'recto', labelKey: 'products.flat' },
        { value: 'curvo', label: 'Curvo' },
        { value: 'doble', label: 'Doble altura' },
        { value: 'dropbar', labelKey: 'products.drop' },
        { value: 'bullhorn', label: 'Bullhorn' },
        { value: 'levantado', labelKey: 'products.riser' },
      ],
    },
  },

  componente: {
    compatibilidad: {
      label: 'publish.compatibility',
      options: [
        { value: 'montaña', labelKey: 'products.mountain' },
        { value: 'ruta', labelKey: 'products.road' },
        { value: 'bmx', labelKey: 'products.bmx' },
        { value: 'electrica', labelKey: 'products.electric' },
      ],
    },

    categoria: {
      label: 'publish.category',
      options: [
        { value: 'ruedas', labelKey: 'products.wheels' },
        { value: 'transmision', labelKey: 'products.transmission' },
        { value: 'frenos', labelKey: 'products.brakes' },
        { value: 'suspension', labelKey: 'products.suspension' },
        { value: 'manubrio', labelKey: 'products.handlebar' },
        { value: 'pedales', labelKey: 'products.pedals' },
        { value: 'sillines', labelKey: 'products.saddle' },
      ],
    },
  },
}

export default filters
