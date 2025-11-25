import './App.css'
import { Landing } from './pages/landing/components/Landing'

const URL = import.meta.env.VITE_API_URL

const App = () => {
    return (
        <>
            <Landing
                apiUrl={URL}
            />
        </>
    )
}

export default App
