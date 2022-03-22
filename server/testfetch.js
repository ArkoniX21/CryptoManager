const axios = require("axios");

let data = {
    email: "akimin97@mail.ru",
    password: "123123"
}

// axios.post('http://localhost:5000/api/register', {
//     data
// }).then(function (response) {
//     console.log(response);
// })

axios.post('http://localhost:5000/api/login', {
    data
}).then(function (response) {
    console.log(response);
})