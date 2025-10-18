import { Forecast } from "./forecast/Forecast"
import { Wrapper } from "./wrapper/Wrapper"
import { Content } from "./content/Content"

export const Landing = () => {
    return (
        <Wrapper>
            <Content>
                <Forecast/>
            </Content>
        </Wrapper>
    )
}