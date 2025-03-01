import React from 'react';
import FilterContent from './FilterContent';

const MobileFilters = ({
    showMobileFilters,
    setShowMobileFilters,
    selectedFilters,
    filterFields,
    priceRange,
    dateRange,
    roundedMinPrice,
    roundedMaxPrice,
    handleFilterChange,
    handlePriceChange,
    handleDateChange,
    resetFilters
}) => {
    const activeFilterCount = Object.values(selectedFilters).filter(Boolean).length;

    return (
        <div className="md:hidden mb-4">
            <button 
                className="w-full bg-blue-500 text-white py-2 rounded flex items-center justify-center gap-2"
                onClick={() => setShowMobileFilters(!showMobileFilters)}
            >
                <span>
                    {showMobileFilters ? 'Ocultar filtros' : 
                     `Filtros ${activeFilterCount > 0 ? `(${activeFilterCount})` : ''}`}
                </span>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    fill="currentColor" 
                    viewBox="0 0 16 16"
                >
                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z"/>
                </svg>
            </button>
            
            {showMobileFilters && (
                <div className="bg-gray-100 p-4 rounded-lg mt-2 overflow-y-auto max-h-screen">
                    <FilterContent 
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
                    />
                </div>
            )}
        </div>
    );
};

export default MobileFilters;