import { useState } from "react"
import styles from './Textfield.module.css'

export const Textfield = (props) => {
    const [focused, setFocused] = useState(false)
    return (
        <div
            style={{
                backgroundColor: props.bg,
                border: focused || props.loading ? props.border.focus : props.border.default,
                borderRadius: props.rounded,
                minHeight: props.minHeight,
                flex: props.flex,
            }}
            className={`${styles.textfield} ${props.loading ? styles.loading : ''}`}
        >
            {
                props.before ?
                    <label
                        htmlFor={'cityBrowser'}
                        className={styles.before}
                    >{props.before}</label> :
                    <></>
            }
            <input
                id={'cityBrowser'}
                className={styles.input}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onChange={(e) => props.setValue(e.target.value)}
                value={props.value}
                placeholder={props.placeholder}
                type="text"
            />
        </div>
    )
}