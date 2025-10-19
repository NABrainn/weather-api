import { useCallback, useEffect, useState } from "react"

export const useHttpClient = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [controller, setController] = useState(null)

    const send = useCallback(async (url, config) => {
        const abortController = new AbortController()
        setController(abortController)
        setLoading(true);
        setError(false);
        try {
            const response = await fetch(url, {
                ...config, 
                signal: abortController.signal
            })
            const responseJson = await response.json()
            setLoading(false)
            setError(false)
            setController(null)
            return { error: false, json: responseJson }
        }
        catch(e) {
            if (e.name === "AbortError") {
                setLoading(false);
                setError(false);
                setController(null);
                return { error: true, message: "Request was canceled" };
            }
            setLoading(false)
            setError(true)
            setController(null);
            return { error: true, message: e.message }
        }
    }, [])
    useEffect(() => {
        return () => {
            if (controller) {
                controller.abort()
                setController(null);
            }
        }
    }, [controller])
    
    return { send, loading, error }
}