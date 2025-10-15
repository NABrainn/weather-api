import { useMediaQuery } from "../../../../../hooks/useMediaQuery"

export const ForecastLabel = (props) => {
    const mobile = useMediaQuery('(max-width:600px)')
    const tablet = useMediaQuery('(min-width:768px) and (max-width:1024px)');
    const laptop = useMediaQuery('(min-width:1024px)');
    const desktop = useMediaQuery('(min-width:1024px)');
    return (
        <td style={{
            display: 'flex',
            flexDirection:
                mobile ? 'column' :
                tablet ? 'column' :
                laptop ? 'row' :
                desktop ? 'row' :
                'row',
            gap: '0.5em',
            alignItems: 'center',
            justifyContent:
                mobile ? 'center' :
                tablet ? 'center' :
                laptop ? 'start' :
                desktop ? 'start' :
                'start',
            paddingLeft:
                mobile ? '0' :
                tablet ? '0' :
                laptop ? '1em' :
                desktop ? '1em' :
                'start',
            minHeight: '8em'
            }}>
            <img 
            src={props.imgUrl} 
            alt="image of city"
            style={{
                width: '3em'
            }}/>
            <span>{props.city}</span>
        </td>
    )
}