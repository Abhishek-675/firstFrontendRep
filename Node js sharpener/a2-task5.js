const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes_2/admin_2');
const shopRoutes = require('./routes_2/shop_2');
const contactRoutes = require('./routes_2/contact-us');
const successRoutes = require('./routes_2/success');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use('/contact-us',contactRoutes);
app.use('/success' , successRoutes)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
