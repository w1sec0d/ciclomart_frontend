import ProductRow from "../components/ProductRow";

const SearchPage = (params) => {
    console.log(params.searchResults);

    const products = () => {
        {params.searchResults.map((result, index) => (
            <li key={index}>{result.nombre}</li>
        ))}
    }

    return (
    <>
      {/* Main Section */}
      <main className="max-w-5xl mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-6">Busca Bicicletas y Repuestos</h1>

        {/* Search Bar */}
        <div className="bg-white shadow rounded-lg overflow-hidden mb-4">
          <div className="flex items-center border-b px-4 py-3">
            <input
              type="text"
              placeholder="Búsqueda"
              className="flex-grow px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
            <button className="ml-2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">Bicicleta de ruta</button>
          </div>
          {/* Filters Row */}
          <div className="grid grid-cols-5 text-center bg-gray-100 py-2 px-4 text-sm font-medium text-gray-600">
            <span>Tipo:Bicicleta</span>
            <span>Precio</span>
            <span>Tipo Frenos</span>
            <span>Peso</span>
            <span>Otros</span>
          </div>
        </div>

        {/* Table Header */}
        {params.searchResults.length > 0 && (
          <>
            <div className="grid grid-cols-4 bg-blue-200 text-blue-800 font-semibold py-2 px-4">
              <span>Producto</span>
              <span>Descripción</span>
              <span>Tipo</span>
              <span>Precio</span>
            </div>

            {/* Products List */}
            <div className="bg-white shadow rounded-lg">
              {params.searchResults.map((result, index) => (
                <ProductRow
                  key={index}
                  image="https://bicistore.com.co/wp-content/uploads/2020/11/imagen-5.jpg"
                  alt={result.nombre}
                  description={result.nombre}
                  brand={result.marca}
                  type={result.tipo}
                  price="$1000"
                />
              ))}
            </div>
          </>
        )}
      </main>
    </>
    );
}

export default SearchPage;