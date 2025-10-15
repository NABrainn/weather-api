import { useMediaQuery } from "../../../../../hooks/useMediaQuery";
import droplet from '../../../../../assets/droplet.svg'
import wind from '../../../../../assets/wind.svg'

export const ForecastDay = (props) => {
    const color = (temperature) => {
        if (temperature >= 50) return '#ff0000';
        if (temperature >= 40) return '#ff4500';
        if (temperature >= 30) return '#ffa500';
        if (temperature >= 20) return '#ffd700';
        if (temperature >= 10) return '#9acd32';
        if (temperature >= 0) return '#00ff00';
        if (temperature >= -10) return '#00b7eb';
        if (temperature >= -20) return '#1e90ff';
        if (temperature >= -30) return '#0000ff';
        if (temperature >= -40) return '#4b0082';
        if (temperature >= -50) return '#800080';
        return '#000000';
    };
    const mobile = useMediaQuery('(max-width:600px)')
    const tablet = useMediaQuery('(min-width:768px) and (max-width:1024px)');
    const laptop = useMediaQuery('(min-width:1024px)');
    const desktop = useMediaQuery('(min-width:1024px)');
    return (
        <td>
            <div
            style={{
                display: 'flex',
                flexDirection: 
                    mobile ? 'column' :
                    tablet ? 'column' :
                    laptop ? 'column' :
                    desktop ? 'row' : 
                    'column',
                justifyContent: 'space-around',
                flex: '1 1 0',
                gap: '0.8em',
                padding: '0.5em 0'
            }}>
                <div
                    style={{
                        paddingLeft: '0.25em'
                    }}
                >
                    <span 
                        style={{color: color(props.temperature)}}>
                        <span>{props.temperature}</span>
                    </span> °C
                </div>
                <div 
                    style={{
                        display: 'flex',
                        gap: '.2em',
                        paddingLeft: '0.25em'
                    }}>
                    <img 
                        style={{
                            maxWidth: '1em'
                        }}
                        src={droplet} 
                        alt="" 
                    />
                    <span>{props.rain}</span>
                    <span 
                        style={{fontSize: '0.8rem'}}
                    > mm</span>
                </div>
                <div 
                    style={{
                        display: 'flex',
                        gap: '.2em',
                        paddingLeft: '0.25em'
                    }}>
                    <img 
                        style={{
                            maxWidth: '1em'
                        }}
                        src={wind} 
                        alt="" 
                    />
                    <span>{props.wind}</span>
                    <span style={{fontSize: '0.8rem'}}> m/s</span>
                </div>
            </div>
        </td>
    )
}