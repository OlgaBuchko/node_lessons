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


const file1= path.join(__dirname,'main','inPerson');
const renamefile1 = path.join(__dirname,'main','inPerson')
const file2 = path.join(__dirname,'main','online')
const renamefile2 = path.join(__dirname,'main','online')

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
        fs.writeFile(path.join(file2,`${user.name}.txt`),`\n NAME: ${user.name} \n AGE: ${user.age} \n CITY: ${user.city} \n \n `,{flag: 'a'},(err)=> {
            if (err) {
                console.log(err);
                throw err;
            }
        })
    })}


const inPersonFile = (arrInPersonFile)=>{
    arrInPersonFile.map(user=>{
        fs.writeFile(path.join(file1,`${user.name}.txt`),`\n NAME: ${user.name} \n AGE: ${user.age} \n CITY: ${user.city} \n \n `,{flag: 'a'},(err)=> {
            if (err) {
                console.log(err);
                throw err;
            }
        })

    })}
inPersonFile(inPersonUsers);
onlineFile(onlineUsers);


function changePlaces2(startPath1,renamePath1,startPath2,renamePath2) {
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
changePlaces2(file1, renamefile2,file2,renamefile1)