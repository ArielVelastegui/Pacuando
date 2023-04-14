import useSWR from "swr";
import axios from "../helpers/axios.helper.";

interface FormValues {
    image_url:string
  }

function useUserMe () {
const { data, error, isLoading, mutate} = useSWR('auth/me')

return{
    error,
    data,
    isLoading,
    mutate,
}}

function userPhoto (userID:string ,img:FormValues){
    axios.post(`/${userID}/add-img`,img)
}

export { useUserMe,userPhoto }