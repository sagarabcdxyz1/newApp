const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 8080;

app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'pug')

const db = require("./app/models");
db.sequelize.sync();

require("./app/routes/tutorial.routes")(app);

// app.get('/', (req, res) => {
//   res.send('Hello World test!')
// })
