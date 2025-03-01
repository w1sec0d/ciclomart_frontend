import React from 'react';
import { formatFieldName } from '../../utils/filterUtils';

const ActiveFiltersBar = ({
    selectedFilters,
    priceRange,
    dateRange,
    roundedMinPrice,
    roundedMaxPrice,
    handleFilterChange,
    setDateRange,
    resetFilters
}) => {
    const activeFilterCount = Object.values(selectedFilters).filter(Boolean).length;
    const isPriceRangeModified = priceRange[0] !== roundedMinPrice || priceRange[1] !== roundedMaxPrice;
    const isDateRangeModified = dateRange.startDate || dateRange.endDate;
    
    if (activeFilterCount === 0 && !isPriceRangeModified && !isDateRangeModified) return null;
    
    return (
        <div className="mb-4 p-2 bg-blue-50 rounded">
            <div className="flex flex-wrap gap-2 items-center">
                <span className="text-sm font-medium">Filtros activos:</span>
                {Object.entries(selectedFilters).map(([key, value]) => {
                    if (!value) return null;
                    return (
                        <div key={key} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm flex items-center">
                            <span>{formatFieldName(key)}: {value.label}</span>
                            <button 
                                className="ml-2 text-blue-500 hover:text-blue-700"
                                onClick={() => handleFilterChange(null, key)}
                            >
                                ×
                            </button>
                        </div>
                    );
                })}
                {isPriceRangeModified && (
                    <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                        Precio: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
                    </div>
                )}
                {isDateRangeModified && (
                    <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm flex items-center">
                        <span>
                            Fecha: {dateRange.startDate ? dateRange.startDate.toLocaleDateString() : 'Inicio'} 
                            {' - '} 
                            {dateRange.endDate ? dateRange.endDate.toLocaleDateString() : 'Fin'}
                        </span>
                        <button 
                            className="ml-2 text-blue-500 hover:text-blue-700"
                            onClick={() => setDateRange({ startDate: null, endDate: null })}
                        >
                            ×
                        </button>
                    </div>
                )}
                <button 
                    className="ml-auto text-blue-600 hover:text-blue-800 text-sm"
                    onClick={resetFilters}
                >
                    Limpiar todos
                </button>
            </div>
        </div>
    );
};

export default ActiveFiltersBar;