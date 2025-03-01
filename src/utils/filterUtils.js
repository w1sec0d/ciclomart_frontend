import capitalize from '../utils/capitalize';

// Obtener opciones únicas para los filtros
export const getFilterOptions = (field, bikes) => {
    if (!bikes) return [];
    
    const options = [...new Set(bikes.map(bike => bike[field]))].filter(Boolean);
    return options.map(option => ({ value: option, label: capitalize(option) }));
};

// Formatear nombre de campo para mostrar
export const formatFieldName = (field) => {
    return field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1');
};

// Obtener rango de precios mínimo y máximo
export const getPriceRange = (bikes) => {
    if (!bikes || bikes.length === 0) return [0, 10000];
    
    const prices = bikes.map(bike => {
        return typeof bike.precio === 'string' 
            ? parseInt(bike.precio.replace(/[^\d]/g, '')) 
            : bike.precio;
    }).filter(price => !isNaN(price) && price > 0);
    
    if (prices.length === 0) return [0, 10000];
    
    return [Math.min(...prices), Math.max(...prices)];
};

// Aplicar todos los filtros
export const applyFilters = (bikes, filters, priceRange, dateRange) => {
    if (!bikes) return [];
    
    return bikes.filter(bike => {
        // Verificar todos los filtros de propiedades
        for (const [key, value] of Object.entries(filters)) {
            if (value && bike[key] !== value.value) {
                return false;
            }
        }
        
        // Verificar el rango de precio
        const price = typeof bike.precio === 'string' 
            ? parseInt(bike.precio.replace(/[^\d]/g, '')) 
            : bike.precio;
            
        if (isNaN(price)) return true; // Si no hay precio, mostrar igualmente
        
        const priceMatch = price >= priceRange[0] && price <= priceRange[1];
        
        // Verificar el rango de fechas (si está establecido)
        let dateMatch = true;
        if (dateRange.startDate || dateRange.endDate) {
            const createdDate = new Date(bike.fechaPublicacion);
            
            if (dateRange.startDate && createdDate < dateRange.startDate) {
                dateMatch = false;
            }
            
            if (dateRange.endDate) {
                // Ajustar la fecha final para incluir todo el día
                const endOfDay = new Date(dateRange.endDate);
                endOfDay.setHours(23, 59, 59, 999);
                
                if (createdDate > endOfDay) {
                    dateMatch = false;
                }
            }
        }
        
        return priceMatch && dateMatch;
    });
};