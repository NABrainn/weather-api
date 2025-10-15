import { HeaderCell } from './header/HeaderCell'
export const ForecastList = ({ children }) => {
    return (
        <table style={{
            backgroundColor: 'var(--four)',
            padding: '0'
        }}>
            <thead
            style={{
                backgroundColor: 'var(--four)'
            }}>
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