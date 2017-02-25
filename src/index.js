import data from './bolivia-presidents.json';

function getNames(json) {
	return data.map(function (item){
		return item.name;
	});
}

function getRandom(json) {
	return data[Math.floor(Math.random() * data.length)];
}

module.exports = {
	all: data,
	names: getNames(data),
	random: getRandom(data)
}