import { Button } from "../../../components/Button"
import { Textfield } from "../../../components/Textfield"

export const CityBrowser = () => {
    const search = (e) => {
        e.preventDefault()
    }
    return (
        <form style={{
            minHeight: '2.5rem',
            display: 'flex',
            gap: '.5em'
        }}>
            <Textfield
            bg={'var(--five-110)'}
            flex={'1 1 75%'}
            border={{
                default: '0.15em solid var(--five-110)',
                focus: '0.15em solid var(--two)'
            }}
            placeholder={'np. Piaseczno'}/>
            <Button
            handleClick={(e) => search(e)}
            bg={'var(--one)'}
            flex={'1 0 25%'}
            textColor={'var(--five)'}
            text={'Szukaj'}/>
        </form>
    )
}