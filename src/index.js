import data from './bolivia-presidents.json';

function getNames(json) {
	return data.map(function (item){
		return item.name;
	});
}

function getRandom(json) {
	return data[Math.floor(Math.random() * data.length)];
}

function getNRandom(number) {
	if(number === undefined) {
		return getRandom(data);
	} else {
		let randomItems = [];
		for (var i = 0; i < number; i++) {
			randomItems.push(getRandom(data));
		}
		return randomItems;
	}
}

module.exports = {
	all: data,
	names: getNames(data),
	random: getRandom(data),
	nrandom: getNRandom
}