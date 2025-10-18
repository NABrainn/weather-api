import { HeaderCell } from './header/HeaderCell'
import styles from './ForecastList.module.css'

export const ForecastList = ({ children }) => {
    return (
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
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    )
}