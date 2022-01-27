require("dotenv").config();

const express = require("express");
const path = require('path');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

let formatDateTime = function (date_ob) {
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = ("0" + date_ob.getHours()).slice(-2);
    let minutes = ("0" + date_ob.getMinutes()).slice(-2);
    let seconds = ("0" + date_ob.getSeconds()).slice(-2);
    return `${month}-${date}-${year} ${hours}:${minutes}:${seconds}`;
};

let getNowToken  = function () {
    let date = new Date();
    let now = formatDateTime(date);
    return { date, now};
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '\\views\\index.html'));
});

app.get('/short', (req, res) => {
    res.sendFile(path.join(__dirname, '\\views\\short.html'));
});

app.get('/server', (req, res) => {
    res.sendFile(path.join(__dirname, '\\index.html'));
});

app.get('/now_token', (req, res) => {
    let now_token = getNowToken();
    res.send({now_token});
});

module.exports = app;