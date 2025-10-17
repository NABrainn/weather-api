export const Forecast = (props) => {
    return (
        <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1em'
        }}>
            {props.children}
        </div>
    )
}