import styles from './Button.module.css'

export const Button = (props) => {
    return (
        <button 
            className={styles.button}
            onClick={(e) => props.handleClick(e)}
            style={{
                background: props.bg,
                color: props.textColor,
                padding: props.p,
                flex: props.flex
            }}
        >{props.text}</button>
    )
}