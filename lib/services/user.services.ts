import useSWR from "swr";
import axios from "../helpers/axios.helper.";


function userMe () {
const { data, error, isLoading, mutate} = useSWR('auth/me')

return{
    error,
    data,
    isLoading,
    mutate,
}}

function userPhoto (userID:string ,img:string){
    axios.post(`/${userID}/add-img`,img)
}

export { userMe,userPhoto }