const axios = require("axios");

let data = {
    username: "Kirill",
    email: "kirill123@mail.ru",
    password: "123123"
}

axios.post('http://localhost:3000/api/user', {
    data
}).then(function (response) {
    console.log(response);
})