import { ForecastDay } from "./forecastDay/ForecastDay.jsx";
import { ForecastLabel } from "./forecastLabel/ForecastLabel.jsx";
import styles from "./ForecastItem.module.css"
import {Button} from "../../../../../../components/button/Button.jsx";

export const CityForecast = (props) => {
    return (
        <tr
            className={styles.item}
        >
            <ForecastLabel
            city={props.city}
            imgUrl={props?.imgUrl}/>
            <ForecastDay
                text = {'Dzisiaj'}
                temperature = {props.todayTemperature}
                rain = {props.todayRain}
                wind = {props.todayWind}
            />
            <ForecastDay
                text = {'Jutro'}
                temperature = {props.tomorrowTemperature}
                rain = {props.tomorrowRain}
                wind = {props.tomorrowWind}
            />
            <ForecastDay
                text = {'Pojutrze'}
                temperature = {props.dayAfterTemperature}
                rain = {props.dayAfterRain}
                wind = {props.dayAfterWind}
            />
            <td
                style={{
                    textAlign: "center"
                }}
            >
                <Button
                    bg={'var(--two)'}
                    textColor={'var(--one)'}
                    text={'x'}
                    fontSize={'1.5em'}
                    bold
                    handleClick={() => props.removeFn(props.id)}
                    hover
                />
            </td>
        </tr>
    )
}