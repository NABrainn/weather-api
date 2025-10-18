import styles from './HeaderCell.module.css'

export const HeaderCell = (props) => {
    return (
        <td
            className={styles.headerCell}
            style={{
                maxWidth: props.maxWidth
            }}
        >{props.text}</td>
    )
}