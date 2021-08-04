const express = require('express');
const app = express();
const ExpressError = require('./expressError');

const {
	createCounter,
	convertNumsArray,
	getMode,
	getMean,
	getMedian,
} = require('./helpers');

app.listen(3000, () => {
	console.log('HELLO');
});
