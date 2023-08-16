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
    },
    formData : [
        { key: 'questions[0][type]', value: 'control_head' },
        { key: 'questions[0][text]', value: 'Form Title' },
        { key: 'questions[1][type]', value: 'control_textbox' },
        { key: 'questions[1][text]', value: 'Text Box Title' },
        { key: 'questions[1][order]', value: '2' },
        { key: 'questions[1][name]', value: 'TextBox' },
        { key: 'questions[1][validation]', value: 'None' },
        { key: 'questions[1][required]', value: 'No' },
        { key: 'questions[1][readonly]', value: 'No' },
        { key: 'questions[1][size]', value: '20' }
    ]
}
