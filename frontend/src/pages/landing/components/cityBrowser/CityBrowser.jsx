import { useState } from "react"
import { Button } from '../../../../components/button/Button.jsx'
import { Textfield } from "../../../../components/textfield/Textfield.jsx"
import { Error } from '../../../../components/httpClient/Error.jsx'
import { Loading } from '../../../../components/httpClient/Loading.jsx'
import { Ok } from "../../../../components/httpClient/Ok.jsx"
import { useHttpClient } from '../../../../hooks/useHttpClient.js'
import { BrowsingResult } from './BrowsingResult.jsx'
import styles from './CityBrowser.module.css'

export const CityBrowser = (props) => {
    const client = useHttpClient()

    const [browsingResult, setBrowsingResult] = useState(undefined)
    const [cityInputValue, setCityInputValue] = useState('')

    const search = async (e) => {
        e.preventDefault()        
        const response = await client.send('http://nrk.no', {
            method: "GET",
            body: JSON.stringify({
                name: cityInputValue
            })
        })
        if(response.json) {
            setBrowsingResult(response.json)
        }
        setCityInputValue('')
    }
    const addCity = () => {
        const updatedCities = [...props.cities, browsingResult]
        props.setCities(updatedCities)
        setBrowsingResult(undefined)
    }
    return (
        <>
            <form 
                className={styles.cityBrowser}
            >
                <Textfield
                    bg={'var(--five-110)'}
                    flex={'1 1 75%'}
                    border={{
                        default: '0.15em solid var(--five-110)',
                        focus: '0.15em solid var(--two)'
                    }}
                    placeholder={'np. Piaseczno'}
                    setValue={setCityInputValue}
                    value={cityInputValue}
                />
                <Button
                    handleClick={(e) => search(e)}
                    bg={'var(--one)'}
                    flex={'1 0 25%'}
                    textColor={'var(--five)'}
                    text={'Szukaj'}
                />
            </form>
            <BrowsingResult>
                {client.error ?
                    <Error>
                        <div 
                            className={styles.error}
                        >
                            Failed to fetch resource
                        </div>
                    </Error> :
                    <></>
                }
                {client.loading ?
                    <Loading>
                        <div
                            className={styles.loading}
                        >
                        </div>
                    </Loading> :
                    <></>
                }
                {browsingResult ?
                    <Ok>
                        <div
                            className={styles.ok}
                        >
                            <span
                                className={styles.label}
                            >Znalezione miasta:</span>
                            <ol
                                className={styles.item}
                            >
                                <li
                                    className={styles.cityName}    
                                >Warszawa</li>
                                <span
                                    className={styles.addCityBtn}
                                    onClick={() => addCity()}
                                >+ Dodaj</span>
                            </ol>
                        </div>
                    </Ok> :
                    <></>
                }
            </BrowsingResult>
        </>
    )
}