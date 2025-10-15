import { useState } from "react"

export const Button = (props) => {
    const [hovered, setHovered] = useState(false)
    return (
        <button 
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={(e) => props.handleClick(e)}
        style={{
            minWidth: 0,
            textWrap: 'wrap',
            WebkitAppearance: 'none',
            outline: 'none',
            border: 'none',
            backgroundColor: props.bg,
            color: props.textColor,
            padding: props.p,
            cursor: hovered ? 'pointer' : 'default',
            flex: props.flex
        }}
        >{props.text}</button>
    )
}