const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/product-hunter';

mongoose.connect(url, { useNewUrlParser : true });