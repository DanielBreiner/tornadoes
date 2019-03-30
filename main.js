const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();

let path = require('path');

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//midleware for public/static files
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/', require('./routes/routes'));

//Bodyparser
app.use(express.urlencoded({ extended: false }));

//port
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started. Port: ${PORT}`));
