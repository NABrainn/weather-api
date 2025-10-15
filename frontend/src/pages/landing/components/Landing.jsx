import { CityBrowser } from "./CityBrowser"
import { Forecast } from "./Forecast"
import { ForecastList } from "./forecastList/ForecastList"
import { ForecastItem } from "./forecastList/body/ForecastItem"
import { Wrapper } from "./Wrapper"
import { Content } from "./Content"
import { useState } from "react"
import piaseczno from '../../../assets/piaseczno.png'

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
                    <CityBrowser/>
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