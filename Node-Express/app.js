// const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
// const expressHbs = require('express-handlebars');

const app = express();

// app.engine('hbs', expressHbs({
//     extname: 'hbs',
//     defaultLayout: 'main-layout',
//     layoutsDir: 'views/layouts'
// }));

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./Routes/admin');
const shopRoutes = require('./Routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.render('404', { pageTitle: "Page Not Found" })
})


// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000);