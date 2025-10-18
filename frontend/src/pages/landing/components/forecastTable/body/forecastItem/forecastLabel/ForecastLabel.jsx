import styles from "./ForecastLabel.module.css"

export const ForecastLabel = (props) => {
    return (
        <td
            className={styles.column}
        >
            <img
                className={styles.img}
                src={props.imgUrl}
                alt="image of city"
            />
            <span>{props.city}</span>
        </td>
    )
}