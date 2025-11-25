import styles from './Forecast.module.css'
import {CityBrowser} from "../cityBrowser/cityBrowser/CityBrowser.jsx";
import {CityTable} from "../forecastTable/CityTable.jsx";
import {useCityStore} from "../../../../hooks/useCityStore.js";

export const Forecast = (props) => {
    const API_URL = props.apiURL
    const { cities, add, remove } = useCityStore();
    return (
        <div
            className={styles.forecast}
        >
            <CityBrowser
                apiUrl={API_URL}
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