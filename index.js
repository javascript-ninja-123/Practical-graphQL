const express = require('express');
const app = express();

require('./config/middleware')(app)



app.listen(4000, () => console.log('Listening'))
