import { randomValue } from './randomValueGenerator';
export const data =
    {randomEmail: randomValue(10)+"@gmail.com",
    randomUsername: randomValue(10),
    randomPassword: randomValue(10),
    randomCompanyName: randomValue(10),
    randomFolderName: randomValue(10),
    randomAnswer: randomValue(10),
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

const planList = ["FREE","BRONZE","SILVER","GOLD"]
const randomPlansIndex = Math.floor(Math.random() * planList.length);
export const randomPlan = planList[randomPlansIndex];

export const plans =
    { 'FREE': {
            currency: 'USD',
            submissions: 100,
            overSubmissions: 200,
            sslSubmissions: 100,
            payments: 10,
            uploads: 104857600,
            tickets: 0,
            subusers: 1,
            views: 1000,
            subviews: 1000,
            formCount: 5,
            hipaaCompliance: false,
            fieldPerForm: 100,
            totalSubmissions: 500,
            signedDocuments: 10,
            monthly: 0,
            yearly: 0,
            biyearly: 0

},
        'BRONZE': {
            currency: 'USD',
            submissions: 1000,
            overSubmissions: 10000,
            sslSubmissions: 1000,
            payments: 100,
            uploads: 1073741824,
            tickets: 3,
            subusers: 3,
            views: 10000,
            formCount: 25,
            hipaaCompliance: false,
            fieldPerForm: 250,
            totalSubmissions: 10000,
            signedDocuments: 100,
            monthly: 39,
            yearly: 408,
            biyearly: 816
        },
        'SILVER': {
            currency: 'USD',
            submissions: 2500,
            overSubmissions: 2500,
            sslSubmissions: 2500,
            payments: 250,
            uploads: 10738466816,
            tickets: 3,
            subusers: 10,
            views: 100000,
            formCount: 50,
            hipaaCompliance: false,
            fieldPerForm: 500,
            totalSubmissions: 25000,
            signedDocuments: 250,
            monthly: 49,
            yearly: 468,
            biyearly: 936
        },
        'GOLD': {
            currency: 'USD',
            submissions: 10000,
            overSubmissions: 10000,
            sslSubmissions: 10000,
            payments: 1000,
            uploads: 107374182400,
            tickets: 10,
            subusers: 100,
            views: 1000000,
            formCount: 100,
            hipaaCompliance: true,
            fieldPerForm: 1000,
            totalSubmissions: 100000,
            signedDocuments: 1000

        }
    }
export const propertiesToCheck = [
    'submissions',
    'overSubmissions',
    'sslSubmissions',
    'payments',
    'uploads',
    'tickets',
    'subusers',
    'views',
    'formCount',
    'hipaaCompliance',
    'fieldPerForm',
    'totalSubmissions',
    'signedDocuments'
];