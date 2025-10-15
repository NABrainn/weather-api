import { ForecastDay } from "./ForecastDay";
import { ForecastLabel } from "./ForecastLabel";

export const ForecastItem = (props) => {
    return (
        <tr style={{
            marginTop: '0.25em',
            fontSize: 'clamp(0.85rem, 0.95vw, 2rem)',
            backgroundColor: 'var(--two)',
            gap: '0.5em',
            cursor: 'pointer',
            color: 'var(--three)',
            fontWeight: 'bold'
        }}>
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