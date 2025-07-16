// useRegionFilter.js
import { useMemo } from 'react';

export function useRegionFilter(properties, selectedRegion, searchText) {

    const filteredProperties = useMemo(() => {
        if (!Array.isArray(properties)) return null;

        let filtered = properties;

        if (selectedRegion && selectedRegion !== 'All') {
            filtered = filtered.filter(
                (property) =>
                    property.region &&
                    property.region.toLowerCase() === selectedRegion.toLowerCase()
            );
        }



        if (searchText?.trim() !== '') {
            const lowerSearch = searchText?.toLowerCase();
            filtered = filtered.filter((property) =>
                property?.region?.toLowerCase()?.includes(lowerSearch)
            );
        }
        return filtered.length > 0 ? filtered : null;
    }, [properties, selectedRegion, searchText]);

    return filteredProperties;
}
