import { randomValue } from './randomValueGenerator';
export const data =
    {randomEmail: randomValue(10)+"@gmail.com",
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

export const formQuestions =
    { '1': {
            name: 'newQuestion',
            order: '14',
            qid: '1',
            text: 'New Question',
            type: 'control_textarea'
        },
        '2': {
            name: 'newQuestion2',
            order: '13',
            qid: '2',
            text: 'New Question',
            type: 'control_textarea'
        },
        '3': {
            name: 'name',
            order: '12',
            qid: '3',
            text: 'Name',
            type: 'control_textarea'
        },
        '4': {
            name: 'name4',
            order: '11',
            qid: '4',
            text: 'Name',
            type: 'control_textarea'
        },
        '5': {
            name: 'name5',
            order: '10',
            qid: '5',
            text: 'Name',
            type: 'control_textarea'
        }
    }

const style = ["nova","form","solid","big","baby_blue","pastel","OldPaper"]
const randomStyleIndex = Math.floor(Math.random() * style.length);
export const randomStyle = style[randomStyleIndex];

export const uploadedFileInfo= [
    {
        id: '5676315651',
        name: 'Sample-PNG-Image.png',
        type: 'image/png',
        size: '128544',
        username: 'burakveziran321',
        form_id: '232311744984964',
        submission_id: '5683458305917253200',
        url: 'http://www.jotform.com/uploads/burakveziran321/232311744984964/5683458305917253200/Sample-PNG-Image.png'
}]

export const webhookUrl = "https://"+randomValue(5)+".com/handle.php"
