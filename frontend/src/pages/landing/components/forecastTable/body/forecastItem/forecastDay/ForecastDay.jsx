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
                <span>⛅</span>
                <span
                    style={{
                        color: color(props.temperature)
                    }}
                >
                    {props.temperature} °C
                </span>
            </div>
            <div
                className={styles.rainColumn}
            >
                <span>💧</span>
                <span>{props.rain}
                    <span className={styles.quant}> mm</span>
                </span>
            </div>
            <div
                className={styles.windColumn}
            >
                <span>༄</span>
                <span>{props.wind}
                    <span className={styles.quant}> m/s</span>
                </span>
            </div>
        </td>
    )
}