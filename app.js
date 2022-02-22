// 1. /login, поля які треба відрендерити в файлі hbs: firstName, lastName, email(унікальне поле), password, age, city
// просто зробити темплейт з цим усім і вводити свої дані які будуть пушитися в масив і редірект робити на сторінку з усіма
// юзерами /users і перевірка чи такий імейл не існує, якщо існує то редірект на еррор пейдж

const path = require ('path')
const express = require ('express');
const {engine} = require ('express-handlebars');
const {json} = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname,'static')));
app.set('view engine','.hbs');
app.engine('.hbs',engine({defaultLayout:false}));
app.set('views',path.join(__dirname, 'static'))

const users = [];

app.listen(5000,()=>{
    console.log('server has started on port 5000')
});

app.get('/login',(req, res) =>{
res.render('login')
} );

app.get('/users',({query}, res) => {
    const {city, age}=query;

    if(city||age){
        usersArr=[...users]
        if (city){
         res.json(usersArr.filter(user=>user.city === query.city));

        }
     if (age){
         res.json(usersArr.filter(user=>user.age === query.age));

     }
    }
    res.render('users',{users})
})

app.post('/login', ({body}, res) => {
    const userExist = users.some(user => user.email === body.email);
    if (userExist) {
        error = 'User with this email exist!';
        res.redirect('/error');
        return;
    }

    users.push({ ...body,id:users.length+1});
    res.redirect('/users');
});



// 2. /users просто сторінка з усіма юзерами, але можна по квері параметрам їх фільтрувати по age і city
//up

// 3. /user/:id сторінка з інфою про одного юзера

app.get('/users/:Id', ({ params }, res) => {
    const user = users.find(user => user.id === +params.Id);
    if (!user) {
        error = `User with ID: ${params.userId} exist!`;
        res.redirect('/error');
        return;
    }

    res.render('user', { user });
});

app.get('/error', (req, res) => {
    res.render('error', { error });
});
// 4. зробити якщо не відпрацюють ендпоінти то на сторінку notFound редірект
app.use((req, res) => {
    res.render('notFound');
});