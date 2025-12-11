import { HeaderCell } from './header/HeaderCell.jsx'
import styles from './ForecastList.module.css'
import {CityForecast} from "./body/forecastItem/CityForecast.jsx";

export const CityTable = (props) => {
    const table =
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
                <HeaderCell/>
            </tr>
            </thead>
            <tbody>
            {
                props.cities.map(city => {
                    console.log(city)
                    return <CityForecast
                        key={city.id}
                        id={city.id}
                        city={city.city}
                        todayTemperature={city.today_temperature}
                        todayRain={city.today_rain}
                        todayWind={city.today_wind}
                        tomorrowTemperature={city.tomorrow_temperature}
                        tomorrowRain={city.tomorrow_temperature}
                        tomorrowWind={city.tomorrow_wind}
                        dayAfterTemperature={city.day_after_temperature}
                        dayAfterRain={city.day_after_rain}
                        dayAfterWind={city.day_after_wind}
                        removeFn={(id) => props.removeCity(id)}
                    >
                    </CityForecast>
                })
            }
            </tbody>
        </table>;
    const emptyCities = <div>
        <strong>Nie znaleziono miast do wyświetlenia prognozy</strong>
    </div>
    const display =
        props.cities.length ?
        table :
        emptyCities
    return (<>
        {display}
    </>)
}