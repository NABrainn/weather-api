import { useState, useCallback } from "react";

const loadCitiesFromStorage = () => {
    try {
        const stored = localStorage.getItem("cities");
        return stored ? JSON.parse(stored) : [];
    } catch (error) {
        console.error("Failed to load cities from localStorage:", error);
        return [];
    }
};

const saveCitiesToStorage = (cities) => {
    try {
        localStorage.setItem("cities", JSON.stringify(cities));
    } catch (error) {
        console.error("Failed to save cities to localStorage:", error);
    }
};

export const useCityStore = () => {
    const [cities, setCities] = useState(loadCitiesFromStorage);

    const add = useCallback(
        (city) => {
            if (!city?.label?.name || typeof city.forecast !== "object") {
                console.error("Invalid city object:", city);
                return;
            }

            const newId = cities.length > 0 ? Math.max(...cities.map((c) => c.id)) + 1 : 0;

            const newCity = { ...city, id: newId };
            const updatedCities = [...cities, newCity];
            setCities(updatedCities);
            saveCitiesToStorage(updatedCities);
        },
        [cities]
    );

    const remove = useCallback(
        (cityId) => {
            const updatedCities = cities.filter((city) => city.id !== cityId);
            setCities(updatedCities);
            saveCitiesToStorage(updatedCities);
        },
        [cities]
    );

    return { cities, add, remove };
};