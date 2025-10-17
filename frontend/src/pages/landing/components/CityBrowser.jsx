import { useState } from "react"
import { Button } from "../../../components/Button"
import { Textfield } from "../../../components/Textfield"
import { useHttpClient } from "../../../hooks/useHttpClient"
import { BrowsingResult } from "./BrowsingResult"
import { Error } from '../../../components/Error'
import { Loading } from '../../../components/Loading'
import { Ok } from "../../../components/Ok"

export const CityBrowser = (props) => {
    const [browsingResult, setBrowsingResult] = useState(undefined)
    const client = useHttpClient()

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
                style={{
                    minHeight: '2.5rem',
                    display: 'flex',
                    gap: '.5em'
                }}
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
                            style={{
                                minHeight: '5em',
                                backgroundColor: 'var(--two)',
                                color: 'var(--one)',
                                fontWeight: 'bold',
                                padding: '1em'
                            }}
                        >
                            Failed to fetch resource
                        </div>
                    </Error> :
                    <></>
                }
                {client.loading ?
                    <Loading>
                        <div
                            style={{
                                minHeight: '5em',
                                backgroundColor: 'var(--two)',
                                padding: '1em'
                            }}
                        >
                        </div>
                    </Loading> :
                    <></>
                }
                {browsingResult ?
                    <Ok>
                        <div
                            style={{
                                minHeight: '5em',
                                backgroundColor: 'var(--two)',
                                padding: '1em',
                                display: 'flex',
                                flexDirection: 'column',
                                color: 'var(--three)',
                                fontWeight: 'bold'
                            }}
                        >
                            <span
                                style={{
                                    fontSize: '1.1em',
                                    color: 'var(--one)'
                                }}
                            >Znalezione miasta:</span>
                            <ol
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    padding: '1.2rem',
                                }}
                            >
                                <li>Warszawa</li>
                                <span
                                    style={{
                                        cursor: 'pointer',
                                        color: 'var(--five)',
                                    }}
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