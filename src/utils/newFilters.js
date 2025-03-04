const filters = {
  bicicleta: {
    tipo: {
      label: 'Tipo',
      options: [
        { label: 'Montaña', value: 'montaña' },
        { label: 'Ruta', value: 'ruta' },
        { label: 'BMX', value: 'bmx' },
        { label: 'Electrica', value: 'electrica' },
      ],
    },

    color: {
      label: 'Color',
      options: [
        { value: '#FF7F7B', label: 'Rojo' },
        { value: '#A2FF75', label: 'Verde' },
        { value: '#5A67FF', label: 'Azul' },
        { value: '#F5FF78', label: 'Amarillo' },
        { value: '#B471FF', label: 'Magenta' },
        { value: '#8BFFFF', label: 'Cian' },
        { value: '#000000', label: 'Negro' },
        { value: '#FFFFFF', label: 'Blanco' },
        { value: '#808080', label: 'Gris' },
        { value: '#FFB760', label: 'Naranja' },
      ],
    },

    genero: {
      label: 'Genero',
      options: [
        { value: 'hombre', label: 'Hombre' },
        { value: 'mujer', label: 'Mujer' },
        { value: 'unisex', label: 'Unisex' },
      ],
    },

    edad: {
      label: 'Edad',
      options: [
        { value: 'adulto', label: 'Adulto' },
        { value: 'niño', label: 'Niño' },
        { value: 'adolescente', label: 'Adolescente' },
      ],
    },

    materialMarco: {
      label: 'Material del marco',
      options: [
        { value: 'aluminio', label: 'Aluminio' },
        { value: 'carbono', label: 'Fibra de carbono' },
        { value: 'titanio', label: 'Titanio' },
        { value: 'acero', label: 'Acero' },
      ],
    },

    suspension: {
      label: 'Suspensión',
      options: [
        { value: 'delantera', label: 'Delantera' },
        { value: 'trasera', label: 'Trasera' },
        { value: 'doble', label: 'Doble' },
        { value: 'ninguna', label: 'Ninguna' },
      ],
    },

    transmision: {
      label: 'Transmisión',
      options: [
        { value: 'monoplato', label: 'Monoplato' },
        { value: 'doble', label: 'Doble plato' },
        { value: 'triple', label: 'Triple plato' },
      ],
    },

    frenos: {
      label: 'Frenos',
      options: [
        { value: 'disco', label: 'Disco' },
        { value: 'convencional', label: 'Convencional' },
      ],
    },

    pedales: {
      label: 'Pedales',
      options: [
        { value: 'automaticos', label: 'Automáticos' },
        { value: 'plataforma', label: 'Plataforma' },
        { value: 'jaula', label: 'Jaula' },
      ],
    },

    manubrio: {
      label: 'Manubrio',
      options: [
        { value: 'recto', label: 'Recto' },
        { value: 'curvo', label: 'Curvo' },
        { value: 'doble', label: 'Doble altura' },
        { value: 'dropbar', label: 'Dropbar' },
        { value: 'bullhorn', label: 'Bullhorn' },
        { value: 'levantado', label: 'Levantado' },
      ],
    },
  },

  componente: {
    compatibilidad: {
      label: 'Compatibilidad',
      options: [
        { value: 'montaña', label: 'Montaña' },
        { value: 'ruta', label: 'Ruta' },
        { value: 'bmx', label: 'BMX' },
        { value: 'electrica', label: 'Electrica' },
      ],
    },

    categoria: {
      label: 'Categoria',
      options: [
        { value: 'ruedas', label: 'Ruedas' },
        { value: 'transmision', label: 'Transmisión' },
        { value: 'frenos', label: 'Frenos' },
        { value: 'suspension', label: 'Suspensión' },
        { value: 'manubrio', label: 'Manubrio' },
        { value: 'pedales', label: 'Pedales' },
        { value: 'sillines', label: 'Sillines' },
      ],
    },
  },
}

export default filters
