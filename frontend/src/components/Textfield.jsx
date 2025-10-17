import { useState } from "react"

export const Textfield = (props) => {
    const [focused, setFocused] = useState(false)
    return ( 
        <input 
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChange={(e) => props.setValue(e.target.value)}
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
            value={props.value}
            placeholder={props.placeholder}
            type="text"
        /> 
    )
}