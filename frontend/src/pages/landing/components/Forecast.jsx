export const Forecast = ({ children }) => {
    return (
        <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1em'
        }}>
            {children}
        </div>
    )
}