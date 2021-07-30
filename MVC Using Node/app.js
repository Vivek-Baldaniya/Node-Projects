const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./Routes/admin');
const shopRoutes = require('./Routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000);