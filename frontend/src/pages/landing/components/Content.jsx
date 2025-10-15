import { useMediaQuery } from '../../../hooks/useMediaQuery'
export const Content = ({ children }) => {
    const mobile = useMediaQuery('(max-width: 600px)');
    const tablet = useMediaQuery('(min-width: 601px) and (max-width: 768px)');
    const desktop = useMediaQuery('(min-width: 769px)');    
    return (
        <div style={{
            padding: '0.5em',
            margin: '0 auto',
            maxWidth: 
                mobile ? '100%' :
                tablet ? '100%' :
                desktop ? '60%' :
                '50%'
        }}>
            {children}
        </div>
    )
}