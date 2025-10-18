import styles from './Forecast.module.css'

export const Forecast = (props) => {
    return (
        <div
            className={styles.forecast}
        >
            {props.children}
        </div>
    )
}