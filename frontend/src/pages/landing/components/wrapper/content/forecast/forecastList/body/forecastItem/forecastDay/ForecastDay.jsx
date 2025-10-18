import droplet from '../../../../../../../../../../assets/droplet.svg'
import wind from '../../../../../../../../../../assets/wind.svg'
import styles from "./ForecastDay.module.css"

export const ForecastDay = (props) => {
    const color = (temperature) => {
        if (temperature >= 50) return '#ff0000';
        if (temperature >= 40) return '#ff4500';
        if (temperature >= 30) return '#ffa500';
        if (temperature >= 20) return '#ffd700';
        if (temperature >= 10) return '#9acd32';
        if (temperature >= 0) return '#00ff00';
        if (temperature >= -10) return '#00b7eb';
        if (temperature >= -20) return '#1e90ff';
        if (temperature >= -30) return '#0000ff';
        if (temperature >= -40) return '#4b0082';
        if (temperature >= -50) return '#800080';
        return '#000000';
    };
    return (
        <td
            className={styles.column}
        >
            <div
                className={styles.temperatureColumn}
            >
                <span
                    style={{
                        color: color(props.temperature)
                    }}
                >
                    <span>{props.temperature}</span>
                </span> °C
            </div>
            <div
                className={styles.rainColumn}
            >
                <img
                    className={styles.img}
                    src={droplet}
                    alt=""
                />
                <span>{props.rain}</span>
                <span className={styles.quant}> mm</span>
            </div>
            <div
                className={styles.windColumn}
            >
                <img
                    className={styles.img}
                    src={wind}
                    alt=""
                />
                <span>{props.wind}</span>
                <span
                    className={styles.quant}
                > m/s</span>
            </div>
        </td>
    )
}