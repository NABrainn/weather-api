import styles from './Button.module.css'
import {useState} from "react";

export const Button = (props) => {
    const [hovered, setHovered] = useState(false)
    return (
        <button 
            className={styles.button}
            onClick={(e) => props.handleClick(e)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                fontSize: props.fontSize,
                background: props.bg,
                color: hovered && props.hover ? `hsl(from ${props.textColor} h s calc(l + 20))` : props.textColor,
                padding: props.p,
                flex: props.flex,
                fontWeight: props.bold ? 'bold' : 'normal',
            }}
        >{props.text}
        </button>
    )
}