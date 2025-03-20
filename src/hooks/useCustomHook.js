import { useState, useEffect } from "react";

const useCustomHook = (url) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        if(!url) return

        const fetchData = async () => {
            try {
                const response = await fetch(url)
                const result = await response.json()
                setData(result)
            } catch (error) {
                console.error('Error fetching data', error);
            }
        }
        fetchData()
    }, [url])

    return data
}

export default useCustomHook