// const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminData = require('./Routes/admin');
const shopRoutes = require('./Routes/shop');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

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