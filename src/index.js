var data = require('./bolivia-presidents.json');
let names = [];

function getNames(json) {
	for(let i in json){
		names.push(json[i].name);
	}
	return names;
}

function getRandom(json) {
	return data[Math.floor(Math.random() * data.length)];
}

module.exports = {
	all: data,
	names: getNames(data),
	random: getRandom(data)
}