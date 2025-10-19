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
                props.cities.map(city =>
                    <CityForecast
                        key={city.id}
                        id={city.id}
                        label={city.label}
                        forecast={city.forecast}
                        removeFn={(id) => props.removeCity(id)}
                    >
                    </CityForecast>
                )
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