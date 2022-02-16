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


const inPersonPath  = path.join(__dirname,'main','inPerson');
const renameInPersonPath = path.join(__dirname,'main','inPerson')
const onlinePath = path.join(__dirname,'main','online')
const renameOnlinePath = path.join(__dirname,'main','online')

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
const writeFile = (arr,pathFile)=>{
    arr.map(user=>{
        fs.writeFile(path.join(pathFile,`${user.name}.txt`),`\n NAME: ${user.name} \n AGE: ${user.age} \n CITY: ${user.city} \n \n `,{flag: 'a'},(err)=> {
            if (err) {
                console.log(err);
                throw err;
            }
        })
    })}
writeFile(onlineUsers,onlinePath);
writeFile(inPersonUsers,inPersonPath)

function changePlaces(startPath1,renamePath1,startPath2,renamePath2) {
    fs.readdir(startPath1,(err, files)=>{
        if (err) {
            console.log(err)
            throw err
        }
        for (const file of files) {
            fs.rename(path.join(startPath1,file),path.join(renamePath1,file),err => {
        if(err)
        {console.log(err)}

    })
        }
    })
    fs.readdir(startPath2,(err, files)=>{
        if (err) {
            console.log(err)
            throw err
        }
        for (const file of files) {
            fs.rename(path.join(startPath2,file),path.join(renamePath2,file),err => {
                if(err)
                {console.log(err)}

            })
        }
    })
}
changePlaces(onlinePath, renameInPersonPath,inPersonPath,renameOnlinePath)