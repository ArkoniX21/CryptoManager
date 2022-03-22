const express = require("express");
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('./models/User');

const app = express();
const PORT = 5000;
app.use(express.json());

const privateKey = "secretkey123";

mongoose.connect('mongodb://127.0.0.1:27017/usersdb', { useUnifiedTopology: true, useNewUrlParser: true }, 
()=> console.log("Connection to mongodb to be successful"));


app.get('/api/users', (req, res) => {
    User.find({}, (err, docs) => {
        if(err) return console.log(err);
        res.send(docs);
    });
});

app.post('/api/login', (req, res) => {
    let data = req.body.data;

    let payload = {
        email: data.email,
        password: data.password
    }

    User.findOne({email: data.email}, (err, docs) => {
        if(err) {
            console.log(err);
            return res.send("Пользователь не найден");
        }

        if (data.password != docs.password) {
            console.log(docs.password)
            return res.send("Вы ввели неверный пароль");
        }

        const token = jwt.sign(payload, privateKey);

        res.send(token);
    });
});

app.post('/api/register', (req, res) => {
    if(!req.body) {
        return res.sendStatus(400);
    }

    let data = req.body.data;

    User.create({
        username: data.username,
        email: data.email,
        password: data.password
    }, (err, doc) => {        
        if(err) {
            console.log("Пользователь с таким именем или почтой уже существует.");
            return res.send("Пользователь с таким именем или почтой уже существует.");
        }
    
        console.log("Сохранен объект user", doc);
        res.send("Пользователь успешно создан.");
    });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});