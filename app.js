const path = require('path');
const fs = require('fs')

// cw-1

fs.writeFile(path.join(__dirname, 'test.txt'), "1. Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу, дані які" +
    " ви отримали запишіть їх в інший файл, в вас вийде невеликий callback hell, пізніше я вам покажу\n" +
    "як можна це обійти, але поки зробіть так", (err) => {
    if (err) {
        console.log(err)
    }
})
fs.readFile(path.join(__dirname, 'test.txt'), 'utf8', (err, fileContent) => {
    if (err) {
        console.log(err)
    } else {
        fs.writeFile(path.join(__dirname, 'testCopy.txt'), fileContent, (err) => {
            console.log(err)
        })
    }
})

// cw-2

fs.writeFile(path.join(__dirname, 'test2.txt'), '2. Створіть файл ( можете вручну ) заповніть його якимись даними\n' +
    'Прочитайте його, скопіюйте всі дані з нього і перенесіть їх в нову папку та файл в ній, старий файл видаліть після того як все завершиться. Також вийде callback hell',(err)=>{
    console.log(err)
})
fs.readFile(path.join(__dirname, 'test2.txt'), 'utf8', (err, fileContent) => {
    if (err) {
        console.log(err)
    } else {fs.mkdir(path.join(__dirname, "newDir"),{recursive: true},(err)=>{
      if (err)
        console.log(err)
    })
        fs.copyFile(path.join(__dirname, 'test2.txt'),path.join(__dirname, "newDir",'newTest2.txt'), (err)=>{
            if (err){
                console.log(err)
            }
            else {
                fs.unlink(path.join(__dirname,'test2.txt'),(err)=>{
                    if (err){
                        console.log(err)
                    }
                })
            }
        })

    }
})
