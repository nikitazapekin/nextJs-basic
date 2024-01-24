"use server"
import {$authHost, $host} from "./index";
export const fetchOneDevice = async () => {
    const {data} = await $host.get('api/device/' )
    console.log(data)
    return data
}
interface PersonalDataRegister { 
    username: string, 
    email: string,
    password: string
}
export const registerUser= async (payload: PersonalDataRegister ) => {
    const {data} = await $host.post('/auth/register', 
    {
        params: payload
    }
     )
    console.log(data)
    return data
}