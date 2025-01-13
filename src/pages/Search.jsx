import { useState, useEffect } from "react";

//import components
import ProductRow from "../components/ProductRow";
import Selector from "../components/Selector";
import apiService from "../services/apiService";
//import filters
import filters from "../components/filters";

const SearchPage = (params) => {

    const [tipo, setTipo] = useState("bicicleta");
    const [showAllFilters, setShowAllFilters] = useState(false);
    const [results, setResults] = useState(params.searchResults || []);
    const [request, setRequest] = useState({});
    const [filterValues, setFilterValues] = useState({});

    const handleTipoChange = (event) => {
      setTipo(event.target.value);
      setRequest({ tipo: event.target.value }); 

      const defaultValues = {}
      filters[event.target.value].forEach(filter => {
        defaultValues[filter.label] = "";
      });

      setFilterValues(defaultValues);
  
    };

    const handleShowAllFilters = () => {
      setShowAllFilters(!showAllFilters);
    };

    const handleFilterChange = async (filterLabel, selectedValue) => {
      setFilterValues((prev) => ({ ...prev, [filterLabel]: selectedValue }));    
      
      const response = await apiService.searchProducts({tipo: tipo, ...filters, [filterLabel.toLowerCase()]: selectedValue});
      if (response.length >= 1) {
        setResults(response);
      }
      else{
        setResults([]);
      }
      
    }

    useEffect(() => {
      setResults(params.searchResults || []);
      setRequest({});
    }, [params.searchResults, tipo]);

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
            {/* <button className="ml-2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">Bicicleta de ruta</button> */}
          </div>
          {/* Filters Row */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 py-4 px-4">
            <div className="flex flex-col items-start">
              <label className="text-sm font-semibold text-gray-600 mb-1">Tipo</label>
              <select
                className="px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 w-full"
                value={tipo}
                onChange={(event) => {
                  handleTipoChange(event);
                  handleFilterChange("tipo", event.target.value);
                }}
              >
                <option value="bicicleta">Bicicleta</option>
                <option value="repuesto">Repuesto</option>
              </select>
            </div>
            {Array.isArray(filters[tipo]) &&
              filters[tipo]
                .slice(0, showAllFilters ? filters[tipo].length : 4)
                .map((filter, index) => (
                  <Selector 
                    key={index} 
                    label={filter.label} 
                    options={filter.options} 
                    value={filterValues[filter.label] || ""}
                    onFilterChange={handleFilterChange}
                  />
                ))}
          </div>
          {filters[tipo].length > 4 && (
            <div className="px-4">
              <button
                onClick={handleShowAllFilters}
                className="text-blue-500 hover:underline mt-2"
              >
                {showAllFilters ? "Mostrar menos filtros" : "Mostrar más filtros"}
              </button>
            </div>
          )}
        </div>

        {/* Table Header */}
        <div className="hidden sm:grid grid-cols-4 bg-blue-200 text-blue-800 font-semibold py-2 px-4">
          <span>Producto</span>
          <span>Descripción</span>
          <span>Tipo</span>
          <span>Precio</span>
        </div>

            {/* Products List */}
            <div className="bg-white shadow rounded-lg">
              {results && results.map((result, index) => (
                <ProductRow
                  key={index}
                  image="https://bicistore.com.co/wp-content/uploads/2020/11/imagen-5.jpg"
                  alt={result.nombre}
                  description={result.nombre}
                  brand={result.marca}
                  type={result.tipo}
                  price="$1000"
                />)) }
            </div>
      </main>
    </>
    );
}

export default SearchPage;