export const HeaderCell = (props) => {
    return (
        <td
        style={{
            paddingLeft: '.25em',
            color: 'var(--five)',
            fontWeight: 'bold',
            maxWidth: props.maxWidth
        }}>{props.text}</td>
    )
}