import { useContext } from "react"
import { AuthContex } from "../AuthProvider/AuthProvider"
import { useQuery } from "react-query"

const useCarts = () => {
    const { user } = useContext(AuthContex)
    const { refetch, data = [] } = useQuery(['carts', user?.email], async () => {
        const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
        const userCarts = await res.json()
        return userCarts
    }

    )
    return { data, refetch }
}
export { useCarts }