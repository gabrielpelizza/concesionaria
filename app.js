const express = require('express');

const app = express();

app.listen(3000, () => console.log('server running in 3000 port'));

const mainRoute = require('./routers/home');
const sucursalesRoute = require('./routers/sucursales');
const marcasRoute = require('./routers/marcas');
const autosRoute = require('./routers/autos');


app.use('/', mainRoute);
app.use('/sucursales', sucursalesRoute);
app.use('/marcas', marcasRoute);
app.use('/autos', autosRoute);