import { Forecast } from "./forecast/Forecast"
import { Wrapper } from "./wrapper/Wrapper"
import { Content } from "./content/Content"
import { CityBrowser } from "./cityBrowser/cityBrowser/CityBrowser.jsx"
import {CityTable} from "./forecastTable/CityTable.jsx";
import {useLocalStorage} from "../../../hooks/useLocalStorage.js";

export const Landing = () => {
    return (
        <Wrapper>
            <Content>
                <Forecast/>
            </Content>
        </Wrapper>
    )
}