import { randomValue } from './randomValueGenerator';
export const data =
    {baseURL: "https://api.jotform.com",
    timeZone: "Europe/Istanbul",
    APIKey : process.env.APIKEY,
    username : process.env.USERNAME,
    email : process.env.EMAIL,
    password : process.env.PASSWORD,
    name : process.env.NAME,

    randomEmail: randomValue(10)+"@gmail.com",
    randomUsername: randomValue(10),
    randomPassword: randomValue(10)
    }
