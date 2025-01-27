import { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { fetchSearchResults, clearSearchResults, setSearchInput } from "../store/slices/searchSlice";

//import components
import Results from "../components/Search/Results";
import Filters from "../components/Search/Filters";
import Select from "react-select";
import makeAnimated from 'react-select/animated';

//import filters
import filters from "../utils/filters";
import PaginationControls from "../components/Search/PaginationControls";

const animatedComponents = makeAnimated();

const SearchPage = (params) => {

    const dispatch = useDispatch();
    const searchResults = useSelector((state) => state.search.results);
    const searchStatus = useSelector((state) => state.search.status);
    const searchInput = useSelector((state) => state.search.searchInput);

    //State
    const [tipo, setTipo] = useState("bicicleta");
    const [showAllFilters, setShowAllFilters] = useState(false);
    const [filterValues, setFilterValues] = useState({tipo: tipo});

    //pagination variables
    const itemsPerPage = 15;
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = searchResults.slice(startIndex, startIndex + itemsPerPage);

    //State change functions
    const handleShowAllFilters = () => {
      setShowAllFilters(!showAllFilters);
    };

    const handleNextPage = () => {
      setCurrentPage(prevPage => prevPage + 1);
    };
  
    const handlePreviousPage = () => {
      setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };

    //Filter change function
  
    const handleFilterChange = async (filterLabel, selectedValue) => {
      
      let newFilters = {}
      const defaultValues = {}

      //If tipo selector changed, reset all filters

      if (filterLabel === "tipo") {

        setTipo(selectedValue.value);

        const types = ["bicicleta", "repuesto"];
      
        for (const type of types) {
          filters[type].forEach(filter => {
            if (filter.label === "tipo") defaultValues[filter.label.toLowerCase()] = type;
            else if (filter.label === "nombre") defaultValues[filter.label.toLowerCase()] = params.name;
            else
              defaultValues[filter.label.toLowerCase()] = "";
      
          });
        }

        newFilters = ({ nombre:params.name, tipo: selectedValue.value, ...defaultValues }); 
        setFilterValues({...newFilters, ...defaultValues});

        }

      //For every other selector, update the filters
      
      else {
        if(selectedValue === null){
          newFilters = ({ ...filterValues, [filterLabel.toLowerCase()]: "" }); 
          setFilterValues(newFilters);
        }
        else{
          newFilters = ({ ...filterValues, [filterLabel.toLowerCase()]: selectedValue.value }); 
          setFilterValues(newFilters);  
        }       
      }
  
      dispatch(fetchSearchResults(newFilters));
      
    }

    const handleSearchInputChange = (event) => {
      const value = event.target.value
      dispatch(setSearchInput(value))
    }

    //UseEffect
    useEffect(() => {
      if (params.searchResults) {
        dispatch(fetchSearchResults({nombre: params.name, tipo: tipo}));
      }
      return () => {
        dispatch(clearSearchResults());
      }
    }, [params.searchResults, dispatch, params.name, tipo]);

    useEffect(() => {
      if (searchInput) {
        dispatch(fetchSearchResults({nombre: searchInput, tipo: tipo}));
      }
    }, [searchInput, tipo, dispatch]);

    return (
      <div className="flex">
        <div className="w-1/4 p-4 mt-border-r hidden md:block bg-primaryDark">
          <h2 className="text-xl font-semibold mt-20 mb-4 text-zinc-100">Filtros</h2>
          <div className="flex flex-col items-start">
            <label className="text-sm font-semibold text-zinc-100 600 mb-1">Tipo</label>
            <Select
              closeMenuOnSelect={true}
              components={animatedComponents}
              defaultValue={""}
              options={[{value: "bicicleta", label: "Bicicleta"}, {value: "repuesto", label: "Repuesto"}]}
              onChange={(selected) => handleFilterChange("tipo", selected)}
              className="px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 w-full"
              isClearable={false}
            />
          </div>
          <Filters
            filters={filters}
            tipo={tipo}
            handleShowAllFilters={handleShowAllFilters}
            showAllFilters={showAllFilters}
            handleFilterChange={handleFilterChange}
          />
        </div>
      <div className="flex-1 max-w-5xl mx-3 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">Busca Bicicletas y Repuestos</h1>
        <div className="bg-white shadow rounded-lg overflow-hidden mb-4">
          <div className="flex items-center border-b px-4 py-3">
            <input
              type="text"
              placeholder="Búsqueda"
              className="flex-grow px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              value={searchInput}
              onChange={handleSearchInputChange}
            />
          </div>
        </div>
        <div>
        {searchStatus === 'loading' ? (
            <p>Loading...</p>
          ) : searchResults.length > 0 ? (
            Results(currentItems)
          ) : (
            <p>No hay resultados para los filtros ingresados</p>
          )}
        </div>
        <PaginationControls
          currentPage={currentPage}
          handlePreviousPage={handlePreviousPage}
          handleNextPage={handleNextPage}
          startIndex={startIndex}
          itemsPerPage={itemsPerPage}
          filterResultsLength={searchResults.length}
        />
      </div>
    </div>
  );
}

export default SearchPage;