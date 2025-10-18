import { Forecast } from "./forecast/Forecast"
import { Wrapper } from "./wrapper/Wrapper"
import { useState } from "react"
import piaseczno from '../../../assets/piaseczno.png'
import { Content } from "./content/Content"
import { CityBrowser } from "./cityBrowser/CityBrowser"
import {ForecastList} from "./forecastList/ForecastList.jsx";
import {ForecastItem} from "./forecastList/body/forecastItem/ForecastItem.jsx";

export const Landing = () => {
    const [cities, setCities] = useState([
        {
            id: 0,
            label: {
                name: 'Piaseczno',
                imgUrl: piaseczno
            },
            forecast: {
                today: {
                    temperature:-11,    // Celsius
                    rain: 0,            // mm
                    wind: 4,            // m/s
                    details: {}
                },
                tomorrow: {
                    temperature: 13,
                    rain: 0.8,
                    wind: 5,
                    details: {}
                },
                dayAfter: {
                    temperature: 12,
                    rain: 1.8,
                    wind: 5,
                    details: {}
                }
            }
        }
    ])
    return (
        <Wrapper>
            <Content>
                <Forecast>
                    <CityBrowser
                        setCities={setCities}
                        cities={cities}
                    />
                    <ForecastList>
                        {
                            cities.map(city => 
                                <ForecastItem
                                    key={city.id}
                                    label={city.label}
                                    forecast={city.forecast}>
                                </ForecastItem>)
                        }
                    </ForecastList>
                </Forecast>
            </Content>
        </Wrapper>
    )
}