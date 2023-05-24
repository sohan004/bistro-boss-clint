import { useEffect } from "react"

const useTitle = t => {
    useEffect(() => {
        document.title = `Bstro Boss | ${t}`
    }, [])
}

export { useTitle }