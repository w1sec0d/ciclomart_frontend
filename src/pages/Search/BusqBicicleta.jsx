import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';

import { getBicicletas } from '../../services/productService';
import { setLoading, clearLoading } from '../../store/slices/loadingSlice';

import FilterSidebar from '../../components/Search/FilterSidebar';
import MobileFilters from '../../components/Search/MobileFilters';
import ActiveFiltersBar from '../../components/Search/ActiveFiltersBar';
import ProductGrid from '../../components/Search/ProductGrid';
import { getPriceRange, applyFilters } from '../../utils/filterUtils';

const BicycleFinder = () => {
    const dispatch = useDispatch();
    const [priceRange, setPriceRange] = useState([0, 10000]);
    const [filteredBikes, setFilteredBikes] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState({});
    const [showMobileFilters, setShowMobileFilters] = useState(false);
    const [filterFields, setFilterFields] = useState([]);
    const [dateRange, setDateRange] = useState({
        startDate: null,
        endDate: null
    });

    const {
        data: bicicletas,
        isError,
        isLoading,
    } = useQuery(['bicicletas'], getBicicletas);

    useEffect(() => {
        if (isLoading) {
            dispatch(setLoading());
        } else {
            dispatch(clearLoading());
        }
    }, [isLoading, dispatch]);

    // Detectar campos filtables dinámicamente
    useEffect(() => {
        if (bicicletas && bicicletas.length > 0) {
            const excludedFields = [
                'tipo', 'compatibilidad', 'cantidad', 'idProducto', 'ventas',
                'costoEnvio', 'retiroEnTienda', 'imagenURL', 'fechaPublicacion',
                'categoria', 'idModelo', 'idBicicleta', 'idMarca', 'nombreVendedor',
                'apellidoVendedor', 'nombre', 'precio', 'descripcionModelo', 'extras',
                'idImagen', 'idVendedor', 'correoVendedor',
            ];
            
            const includedFields = [];
            
            const sampleBike = bicicletas[0];
            
            let fields;
            if (includedFields.length > 0) {
                fields = includedFields.filter(key => 
                    key in sampleBike && 
                    (typeof sampleBike[key] === 'string' || typeof sampleBike[key] === 'number')
                );
            } else {
                fields = Object.keys(sampleBike).filter(key => 
                    !excludedFields.includes(key) && 
                    (typeof sampleBike[key] === 'string' || typeof sampleBike[key] === 'number')
                );
            }
            
            setFilterFields(fields);
            
            const initialFilters = {};
            fields.forEach(field => {
                initialFilters[field] = null;
            });
            setSelectedFilters(initialFilters);
            
            const [min, max] = getPriceRange(bicicletas);
            const roundedMin = Math.floor(min / 10000) * 10000;
            const roundedMax = Math.ceil(max / 10000) * 10000;
            setPriceRange([roundedMin, roundedMax]);
        }
    }, [bicicletas]);

    // Aplicar filtros cuando cambien
    useEffect(() => {
        if (bicicletas && bicicletas.length > 0) {
            const filtered = applyFilters(bicicletas, selectedFilters, priceRange, dateRange);
            setFilteredBikes(filtered);
        }
    }, [selectedFilters, priceRange, bicicletas, dateRange]);

    const handleFilterChange = (selectedOption, filterName) => {
        setSelectedFilters(prev => ({
            ...prev,
            [filterName]: selectedOption
        }));
    };

    const handlePriceChange = (e) => {
        const value = parseInt(e.target.value);
        const isMinPrice = e.target.id === 'minPrice';
        
        setPriceRange(prev => {
            const [min, max] = prev;
            if (isMinPrice) {
                return [Math.min(value, max), max];
            } else {
                return [min, Math.max(min, value)];
            }
        });
    };

    const handleDateChange = (dates, field) => {
        if (field === 'startDate') {
            setDateRange(prev => ({ ...prev, startDate: dates }));
        } else {
            setDateRange(prev => ({ ...prev, endDate: dates }));
        }
    };

    const resetFilters = () => {
        if (!bicicletas || bicicletas.length === 0) return;
        
        const [minPrice, maxPrice] = getPriceRange(bicicletas);
        const roundedMinPrice = Math.floor(minPrice / 10000) * 10000;
        const roundedMaxPrice = Math.ceil(maxPrice / 10000) * 10000;
        
        const resetValues = {};
        filterFields.forEach(field => {
            resetValues[field] = null;
        });
        
        setSelectedFilters(resetValues);
        setPriceRange([roundedMinPrice, roundedMaxPrice]);
        setDateRange({ startDate: null, endDate: null });
        
        if (window.innerWidth < 768) {
            setShowMobileFilters(false);
        }
    };

    if (isLoading) return null;
    if (isError) return <p className="p-4 text-red-600">Error: {isError.message}</p>;

    const [minPrice, maxPrice] = getPriceRange(bicicletas);
    const roundedMinPrice = Math.floor(minPrice / 10000) * 10000;
    const roundedMaxPrice = Math.ceil(maxPrice / 10000) * 10000;

    return (
        <div className="bg-slate-100">
            {/* Filtros móviles */}
            <MobileFilters 
                showMobileFilters={showMobileFilters}
                setShowMobileFilters={setShowMobileFilters}
                selectedFilters={selectedFilters}
                filterFields={filterFields}
                priceRange={priceRange}
                dateRange={dateRange}
                roundedMinPrice={roundedMinPrice}
                roundedMaxPrice={roundedMaxPrice}
                handleFilterChange={handleFilterChange}
                handlePriceChange={handlePriceChange}
                handleDateChange={handleDateChange}
                resetFilters={resetFilters}
            />

            {/* Barra de filtros activos */}
            <ActiveFiltersBar 
                selectedFilters={selectedFilters}
                priceRange={priceRange}
                dateRange={dateRange}
                roundedMinPrice={roundedMinPrice}
                roundedMaxPrice={roundedMaxPrice}
                handleFilterChange={handleFilterChange}
                setDateRange={setDateRange}
                resetFilters={resetFilters}
            />

            <div className="flex flex-col bg-slate-100 md:flex-row gap-0">
                {/* Sidebar de filtros (escritorio) */}
                <FilterSidebar 
                    filterFields={filterFields}
                    priceRange={priceRange}
                    dateRange={dateRange}
                    selectedFilters={selectedFilters}
                    roundedMinPrice={roundedMinPrice}
                    roundedMaxPrice={roundedMaxPrice}
                    handleFilterChange={handleFilterChange}
                    handlePriceChange={handlePriceChange}
                    handleDateChange={handleDateChange}
                    resetFilters={resetFilters}
                    bicicletas={bicicletas}
                />

                {/* Grid de productos */}
                <ProductGrid 
                    filteredBikes={filteredBikes}
                    bicicletas={bicicletas}
                />
            </div>
        </div>
    );
};

export default BicycleFinder;