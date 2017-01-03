var uniqueRandomArray = require('unique-random-array');
var presidentNames = require('./bolivia-presidents.json');

module.exports = {
	all: presidentNames,
	random: uniqueRandomArray(presidentNames)
};