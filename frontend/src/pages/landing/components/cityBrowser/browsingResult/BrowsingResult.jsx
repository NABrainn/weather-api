import styles from './BrowsingResult.module.css'

export const BrowsingResult = (props) => {
    return (
        <>
        {props.error ?
                <div
                    className={styles.error}
                >
                    Failed to fetch resource
                </div> :
                <></>
        }
        {props.value ?
            <div
                className={styles.ok}
            >
                            <span
                                className={styles.label}
                            >Znalezione miasta:</span>
                <ol
                    className={styles.item}
                >
                    <li
                        className={styles.cityName}
                    >Warszawa</li>
                    <span
                        className={styles.addCityBtn}
                        onClick={() => props.addCity()}
                    >+ Dodaj</span>
                </ol>
            </div> :
            <></>
        }
        </>
    )
}