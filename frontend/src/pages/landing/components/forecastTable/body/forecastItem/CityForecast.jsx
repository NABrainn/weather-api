import { ForecastDay } from "./forecastDay/ForecastDay.jsx";
import { ForecastLabel } from "./forecastLabel/ForecastLabel.jsx";
import styles from "./ForecastItem.module.css"

export const CityForecast = (props) => {
    return (
        <tr
            className={styles.item}
        >
            <ForecastLabel
            city={props.label.name}
            imgUrl={props.label.imgUrl}/>
            <ForecastDay
                text = {'Dzisiaj'}
                temperature = {props.forecast.today.temperature}
                rain = {props.forecast.today.rain}
                wind = {props.forecast.today.wind}    
            />
            <ForecastDay
                text = {'Jutro'}
                temperature = {props.forecast.tomorrow.temperature}
                rain = {props.forecast.tomorrow.rain}
                wind = {props.forecast.tomorrow.wind}    
            />
            <ForecastDay
                text = {'Pojutrze'}
                temperature = {props.forecast.dayAfter.temperature}
                rain = {props.forecast.dayAfter.rain}
                wind = {props.forecast.dayAfter.wind}    
            />
        </tr>
    )
}