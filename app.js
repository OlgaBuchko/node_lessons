const path = require('path');
const fs = require('fs')

fs.mkdir(path.join(__dirname, "main"), {recursive: true},(err)=>{
    if(err){
        console.log(err)
    }
});
fs.mkdir(path.join(__dirname,'main', 'online'),{recursive:true},err => {
    if (err) {
        console.log(err)
    }
});
fs.mkdir(path.join(__dirname,'main', 'inPerson'),{recursive:true},err => {
    if (err){
        console.log(err)
    }
});

let onlineUsers=[
    {name: 'Oleg',
        age:32,
        city:'Lviv'},
    {name:'Ira',
        age:21,
        city:'Ternopil'}
];

let inPersonUsers=[
    {name:'Petro',
        age:43,
        city:'Kyiv'},
    {
        name:'Marina',
        age:22,
        city:'Harkiv'
    }
]
const onlineFile = (arrInOnlineFile)=>{
    arrInOnlineFile.map(user=>{
        fs.writeFile(path.join(__dirname,'main','online','online.txt'),`\n NAME: ${user.name} \n AGE: ${user.age} \n CITY: ${user.city} \n \n `,{flag: 'a'},(err)=> {
            if (err) {
                console.log(err);
                throw err;
            }
        })
    })}


const inPersonFile = (arrInPersonFile)=>{
    arrInPersonFile.map(user=>{
        fs.writeFile(path.join(__dirname,'main','inPerson','inPerson.txt'),`\n NAME: ${user.name} \n AGE: ${user.age} \n CITY: ${user.city} \n \n `,{flag: 'a'},(err)=> {
            if (err) {
                console.log(err);
                throw err;
            }
        })

    })}
// inPersonFile(inPersonUsers);
// onlineFile(onlineUsers);

const changePlaces = function (arrInOnlineFile,arrInPersonFile) {

    fs.truncate(path.join(__dirname,'main','online','online.txt'),(err)=> {
        if (err) {
            console.log(err);
            throw err;
        }
    })

    fs.truncate(path.join(__dirname,'main','inPerson','inPerson.txt'),(err)=> {
        if (err) {
            console.log(err);
            throw err;
        }
    })
    onlineFile(arrInOnlineFile);
    inPersonFile(arrInPersonFile)
}
changePlaces(inPersonUsers,onlineUsers)