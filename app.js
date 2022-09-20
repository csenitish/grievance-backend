const express = require('express');
const app = express();
const morgan = require('morgan');

const streamLog = require('./utils/serverlog');
const dotenv = require('dotenv');
dotenv.config();
app.use(morgan('combined',{stream:streamLog}));
app.use(require('cors')());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', require('./routes/userroute'));
app.use('/', require('./routes/complainroute'));
app.use(require('./utils/error404'))
const logger = require('./utils/logger')(__filename);
const server = app.listen(1122,()=>{
    console.log('Server Started...');
    logger.debug('Server Started At '+server.address().port);
})