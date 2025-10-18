import { HeaderCell } from './header/HeaderCell.jsx'
import styles from './ForecastList.module.css'
import {CityForecast} from "./body/forecastItem/CityForecast.jsx";

export const CityTable = (props) => {
    return (
        <table className={styles.table}>
            <thead className={styles.head}>
                <tr>
                    <HeaderCell
                        text={'Miasto'}
                    />
                    <HeaderCell
                        text={'Dzisiaj'}
                    />
                    <HeaderCell
                        text={'Jutro'}
                    />
                    <HeaderCell
                        text={'Pojutrze'}
                    />
                </tr>
            </thead>
            <tbody>
                {
                    props.cities.map(city =>
                        <CityForecast
                            key={city.id}
                            label={city.label}
                            forecast={city.forecast}>
                        </CityForecast>)
                }
            </tbody>
        </table>
    )
}