import React from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { getFilterOptions, formatFieldName } from '../../utils/filterUtils';

const FilterContent = ({
    filterFields,
    priceRange,
    dateRange,
    selectedFilters,
    roundedMinPrice,
    roundedMaxPrice,
    handleFilterChange,
    handlePriceChange,
    handleDateChange,
    resetFilters,
    bicicletas
}) => {
    const priceStep = 10000;
    const activeFilterCount = Object.values(selectedFilters).filter(Boolean).length;
    const isPriceRangeModified = priceRange[0] !== roundedMinPrice || priceRange[1] !== roundedMaxPrice;
    const isDateRangeModified = dateRange.startDate || dateRange.endDate;

    return (
        <>
            <h1 className="text-xl font-bold text-center mb-6">Filtros</h1>
            
            {/* Filtros dinámicos */}
            {filterFields
                .filter(field => field !== 'createdAt' && field !== 'updatedAt')
                .map(field => (
                    <div className="mb-4" key={field}>
                        <label className="block mb-2 font-medium">{formatFieldName(field)}</label>
                        <Select
                            className="w-full"
                            placeholder={`Selecciona ${formatFieldName(field).toLowerCase()}`}
                            options={getFilterOptions(field, bicicletas)}
                            value={selectedFilters[field]}
                            onChange={(option) => handleFilterChange(option, field)}
                            isClearable
                        />
                    </div>
                ))
            }

            {/* Filtro de fecha de publicación */}
            <div className="mb-4">
                <label className="block mb-2 font-medium">Fecha de Publicación</label>
                <div className="flex flex-col space-y-2">
                    <div>
                        <label className="block text-sm mb-1">Desde</label>
                        <DatePicker
                            selected={dateRange.startDate}
                            onChange={date => handleDateChange(date, 'startDate')}
                            selectsStart
                            startDate={dateRange.startDate}
                            endDate={dateRange.endDate}
                            className="w-full border rounded px-2 py-1"
                            placeholderText="Fecha inicial"
                            dateFormat="dd/MM/yyyy"
                            isClearable
                        />
                    </div>
                    <div>
                        <label className="block text-sm mb-1">Hasta</label>
                        <DatePicker
                            selected={dateRange.endDate}
                            onChange={date => handleDateChange(date, 'endDate')}
                            selectsEnd
                            startDate={dateRange.startDate}
                            endDate={dateRange.endDate}
                            minDate={dateRange.startDate}
                            className="w-full border rounded px-2 py-1"
                            placeholderText="Fecha final"
                            dateFormat="dd/MM/yyyy"
                            isClearable
                        />
                    </div>
                </div>
            </div>

            {/* Filtro de Rango de Precio */}
            <div className="mb-4">
                <label className="block mb-2 font-medium">Rango de Precio</label>
                <div className="flex justify-between mb-2">
                    <span>${priceRange[0].toLocaleString()}</span>
                    <span>${priceRange[1].toLocaleString()}</span>
                </div>
                <div className="mb-2">
                    <label className="block text-sm mb-1">Precio mínimo</label>
                    <input
                        type="range"
                        id="minPrice"
                        min={roundedMinPrice}
                        max={roundedMaxPrice}
                        step={priceStep}
                        value={priceRange[0]}
                        onChange={handlePriceChange}
                        className="w-full"
                    />
                </div>
                <div className="mb-2">
                    <label className="block text-sm mb-1">Precio máximo</label>
                    <input
                        type="range"
                        id="maxPrice"
                        min={roundedMinPrice}
                        max={roundedMaxPrice}
                        step={priceStep}
                        value={priceRange[1]}
                        onChange={handlePriceChange}
                        className="w-full"
                    />
                </div>
            </div>
            
            {/* Botón para limpiar filtros */}
            <button
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                onClick={resetFilters}
            >
                Limpiar Filtros
            </button>
            
            {/* Contador de filtros activos */}
            <div className="mt-4 p-2 bg-blue-100 rounded text-center">
                {activeFilterCount > 0 || 
                 isPriceRangeModified ||
                 isDateRangeModified ? (
                    <p className="text-sm font-medium">
                        {activeFilterCount + 
                         (isPriceRangeModified ? 1 : 0) +
                         (isDateRangeModified ? 1 : 0)} filtros aplicados
                    </p>
                ) : (
                    <p className="text-sm">Sin filtros activos</p>
                )}
            </div>
        </>
    );
};

export default FilterContent;