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

export const formFields = [
    { type: 'control_textbox', text: 'Name' },
    { type: 'control_email', text: 'Email' },
    { type: 'control_textarea', text: 'Message' },
];