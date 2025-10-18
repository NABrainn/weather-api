import { useState } from "react"
import styles from './Textfield.module.css'

export const Textfield = (props) => {
    const [focused, setFocused] = useState(false)
    return ( 
        <input 
            className={styles.textfield}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChange={(e) => props.setValue(e.target.value)}
            style={{
                backgroundColor: props.bg,
                border: focused ? props.border.focus : props.border.default,
                borderRadius: props.rounded,
                minHeight: props.minHeight,
                flex: props.flex
            }}
            value={props.value}
            placeholder={props.placeholder}
            type="text"
        /> 
    )
}