import { useContext } from "react"
import { useQuery } from "react-query"
import { AuthContex } from "../AuthProvider/AuthProvider"
import useAxiosSecure from "./useAxios"

const useAdmin = () => {
    const axios = useAxiosSecure()
    const { user } = useContext(AuthContex)
    const { isLoading, data: adminData } = useQuery({
        queryKey: ['admin', user?.email],
        queryFn: async () => {
            const res = await axios.get(`/admin?email=${user?.email}`)
            return await res.data
        },
    })
    return { adminData, isLoading }
}

export default useAdmin