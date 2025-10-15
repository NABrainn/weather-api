import { useState } from "react"

export const Textfield = (props) => {
    const [focused, setFocused] = useState(false)
    return ( 
    <input 
    onFocus={() => setFocused(true)}
    onBlur={() => setFocused(false)}
    style={{
        minWidth: 0,
        backgroundColor: props.bg,
        WebkitAppearance: 'none',
        outline: 'none',
        border: focused ? props.border.focus : props.border.default,
        borderRadius: props.rounded,
        minHeight: props.minHeight,
        flex: props.flex
    }}
    placeholder={props.placeholder}
    type="text"/> 
)
}