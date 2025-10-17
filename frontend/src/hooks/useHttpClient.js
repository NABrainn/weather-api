import { useCallback, useEffect, useState } from "react"

export const useHttpClient = () => {
    const [json, setJson] = useState({})
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
            setJson(responseJson)
            setLoading(false)
            setError(false)
            setController(null)
            return { error: false, json: responseJson }
        }
        catch(e) {
            if (e.name === "AbortError") {
                setJson({});
                setLoading(false);
                setError(false);
                setController(null);
                return { error: true, message: "Request was canceled" };
            }
            setJson({})
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
    })
    return { send, json, loading, error }
}