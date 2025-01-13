const filters = {
    "bicicleta":[
        {label: 'Precio', options: [
            {label: 'Menor a $1M', value: "low"}, 
            {label: '$1M - $5M', value: "medium"},
            {label: 'Mayor a $5M', value: "high"}
        ]} ,
        {label: 'Marca', options: [
            {label: 'Marca X', value: "MarcaX"}, 
            {label: 'Marca Y', value: "MarcaY"},
            {label: 'Giant', value: "giant"}
        ]} ,
        {label: 'Tipo de bicicleta', options: [
            {label: 'Montaña', value: "montaña"}, 
            {label: 'Ruta', value: "ruta"},
            {label: 'BMX', value: "bmx"}
        ]} ,
        {label: 'Tamaño del marco', options: [
            {label: 'Pequeño', value: "small"}, 
            {label: 'Mediano', value: "medium"},
            {label: 'Grande', value: "large"},
            {label: 'XL', value: "xl"}
        ]} ,
        {label: 'Material del marco', options: [
            {label: 'Aluminio', value: "aluminio"}, 
            {label: 'Acero', value: "acero"},
            {label: 'Carbono', value: "carbono"},
            {label: 'Titanio', value: "titanio"}
        ]} ,
        {label: 'Tamaño de rueda', options: [
            {label: '24"', value: "24"}, 
            {label: '26"', value: "26"},
            {label: '27.5"', value: "27.5"},
            {label: '29"', value: "29"}
        ]} ,
        {label: 'Tipo de frenos', options: [
            {label: 'Disco', value: "disco"}, 
            {label: 'Convencional', value: "convencional"}
        ]} ,
        {label: 'Velocidades', options: [
            {label: '1', value: "1"}, 
            {label: '3', value: "3"},
            {label: '5', value: "5"},
            {label: '7', value: "7"},
            {label: '10', value: "10"},
            {label: '20', value: "20"},
            {label: '22', value: "22"},
            {label: '24', value: "24"},
            {label: '27', value: "27"},
            {label: '30', value: "30"},
            {label: '33', value: "33"},
            {label: '36', value: "36"}
        ]} ,
        {label: 'Suspensión', options: [
            {label: 'Sin suspensión', value: "sin"}, 
            {label: 'Delantera', value: "delantera"},
            {label: 'Doble', value: "doble"}
        ]} ,
        {label: 'Transmisión', options: [
            {label: 'Monoplato', value: "monoplato"}, 
            {label: 'Doble plato', value: "doble"},
            {label: 'Triple plato', value: "triple"}
        ]} ,
        {label: 'Peso', options: [
            {label: 'Ligero', value: "ligero"}, 
            {label: 'Medio', value: "medio"},
            {label: 'Pesado', value: "pesado"}
        ]} ,
        {label: 'Color', options: [
            {label: 'Rojo', value: "rojo"}, 
            {label: 'Azul', value: "azul"},
            {label: 'Verde', value: "verde"},
            {label: 'Amarillo', value: "amarillo"}
        ]} ,
        {label: 'Extras', options: [
            {label: 'Luces', value: "luces"}, 
            {label: 'Timbre', value: "timbre"},
            {label: 'Parrilla', value: "parrilla"},
            {label: 'Candado', value: "candado"}
        ]} ,
        {label: 'Condición', options: [
            {label: 'Nuevo', value: "nuevo"}, 
            {label: 'Usado', value: "usado"},
            {label: 'Reacondicionado', value: "reacondicionado"}
        ]} ,
        {label: 'Disponibilidad', options: [
            {label: 'Inmediata', value: "inmediata"}, 
            {label: 'Preventa', value: "preventa"},
            {label: 'Sobre pedido', value: "pedido"},
            {label: 'Agotado', value: "agotado"}
        ]} ,
        {label: 'Método de envio', options: [
            {label: 'Gratis', value: "gratis"}, 
            {label: 'Con costo', value: "costo"},
            {label: 'Retiro en tienda', value: "retiro"}
        ]} ,
        {label: 'Ubicación del vendedor', options: [
            {label: 'Bogotá', value: "bogota"}
        ]} ,
    ],
    "repuesto": [
        {label: 'Precio', options: [
            {label: 'Menor a $50K', value: "low"}, 
            {label: '$50K - $200K', value: "medium"},
            {label: 'Mayor a $200K', value: "high"}
        ]} ,
        {label: 'Categoría', options: [
            {label: 'Transmisión', value: "transmision"}, 
            {label: 'Rueda', value: "rueda"},
            {label: 'Manubrio', value: "manubrio"},
            {label: 'Pedales', value: "pedales"},
            {label: 'Asiento', value: "asiento"},
            {label: 'Frenos', value: "frenos"},
            {label: 'Suspensión', value: "suspension"},
            {label: 'Marco', value: "marco"}
        ]} ,
        {label: 'Marca', options: [
            {label: 'Shimano', value: "shimano"}, 
            {label: 'Sram', value: "sram"},
            {label: 'Campagnolo', value: "campagnolo"}
        ]} ,
        {label: 'Compatibilidad', options: [
            {label: 'Ruta', value: "ruta"}, 
            {label: 'Montaña', value: "montaña"},
            {label: 'BMX', value: "bmx"}
        ]} ,
        {label: 'Disponibilidad', options: [
            {label: 'Inmediata', value: "inmediata"}, 
            {label: 'Preventa', value: "preventa"},
            {label: 'Sobre pedido', value: "pedido"},
            {label: 'Agotado', value: "agotado"}
        ]} ,
        {label: 'Método de envio', options: [
            {label: 'Gratis', value: "gratis"}, 
            {label: 'Con costo', value: "costo"},
            {label: 'Retiro en tienda', value: "retiro"}
        ]} ,
        {label: 'Ubicación del vendedor', options: [
            {label: 'Bogotá', value: "bogota"}
        ]} ,
    ]
}

export default filters