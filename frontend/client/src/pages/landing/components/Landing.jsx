import { Forecast } from "./forecast/Forecast"
import { Wrapper } from "./wrapper/Wrapper"
import { Content } from "./content/Content"

export const Landing = (props) => {
    const API_URL = props.apiUrl
    return (
        <Wrapper>
            <Content>
                <Forecast
                    apiURL={API_URL}
                />
            </Content>
        </Wrapper>
    )
}