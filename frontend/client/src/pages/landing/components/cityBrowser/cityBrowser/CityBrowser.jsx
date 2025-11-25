import { useState } from "react"
import { Button } from '../../../../../components/button/Button.jsx'
import { Textfield } from "../../../../../components/textfield/Textfield.jsx"
import { useHttpClient } from '../../../../../hooks/useHttpClient.js'
import warszawa from '../../../../../assets/warszawa.jpg'
import styles from './CityBrowser.module.css'

export const CityBrowser = (props) => {
    const API_URL = props.apiUrl
    const client = useHttpClient()

    const [browsingResult, setBrowsingResult] = useState(undefined)
    const [cityInputValue, setCityInputValue] = useState('')

    const mockCity = {
            label: {
                name: 'Warszawa',
                imgUrl: warszawa
            },
            forecast: {
                today: {
                    temperature: 5,    // Celsius
                    rain: 0,            // mm
                    wind: 4,            // m/s
                    details: {}
                },
                tomorrow: {
                    temperature: 7,
                    rain: 0.8,
                    wind: 5,
                    details: {}
                },
                dayAfter: {
                    temperature: 9,
                    rain: 1.8,
                    wind: 5,
                    details: {}
                }
            }
        }

    const search = async (e) => {
        e.preventDefault()
        if(!cityInputValue) {
            return
        }
        const response = await client.send(`${API_URL}/weather?city=${cityInputValue}`, {
            method: "GET",
            headers: {
                accept: "application/json",
                accessControlAllowOrigin: "*"
            }
        })
        console.log(response)
        if(response.json) {
            setBrowsingResult(response.json)
        }
        setCityInputValue('')
        props.addCity(browsingResult)
    }
    return (
        <>
            <form
                className={styles.cityBrowser}
            >
                <Textfield
                    before={'🔎'}
                    bg={'var(--five-110)'}
                    flex={'1 1 75%'}
                    border={{
                        default: '0.15em solid var(--five-110)',
                        focus: '0.15em solid var(--two)'
                    }}
                    placeholder={'np. Piaseczno'}
                    setValue={setCityInputValue}
                    value={cityInputValue}
                    loading={client.loading}
                />
                <Button
                    handleClick={(e) => search(e)}
                    bg={'var(--one)'}
                    flex={'1 0 25%'}
                    textColor={'var(--five)'}
                    text={'Szukaj'}
                />
            </form>
        </>
    )
}