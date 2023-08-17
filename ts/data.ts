import { randomValue } from './randomValueGenerator';
export const data =
    {baseURL: "https://api.jotform.com",
    timeZone: "Europe/Istanbul",
    APIKey : "8c851ab0b530d53a97210978b104dec9",
    username : "burakveziran321",
    email : "burak.veziran@gmail.com",
    password : "7HyHpebrBrB^!w",
    name : "Burak Veziran",

    randomEmail: randomValue(10)+"@gmail.com",
    randomUsername: randomValue(10),
    randomPassword: randomValue(10),
    randomCompanyName: randomValue(10),
    formProperties : {
        title: randomValue(10)
    },
    reportProperties : {
        listType: 'csv',
        title: randomValue(10),
        fields: 'ip,dt,1'
    }
}