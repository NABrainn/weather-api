import styles from './Forecast.module.css'
import {CityBrowser} from "../cityBrowser/cityBrowser/CityBrowser.jsx";
import {CityTable} from "../forecastTable/CityTable.jsx";
import {useLocalStorage} from "../../../../hooks/useLocalStorage.js";

export const Forecast = (props) => {
    const { cities, add, remove } = useLocalStorage();
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