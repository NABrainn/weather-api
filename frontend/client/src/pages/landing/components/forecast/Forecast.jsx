import styles from './Forecast.module.css'
import {CityBrowser} from "../cityBrowser/cityBrowser/CityBrowser.jsx";
import {CityTable} from "../forecastTable/CityTable.jsx";
import {useCityStore} from "../../../../hooks/useCityStore.js";

export const Forecast = () => {
    const { cities, add, remove } = useCityStore();
    return (
        <div
            className={styles.forecast}
        >
            <CityBrowser
                cities={cities}
                addCity={(city) => add(city)}
            />
            <CityTable
                cities={cities}
                removeCity={(id) => remove(id)}
            />
        </div>
    )
}