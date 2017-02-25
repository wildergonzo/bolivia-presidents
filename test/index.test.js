var expect = require('chai').expect;
var presidents = require('../dist/index.js');

describe('bolivia-presidents', function(){

	describe('names', function(){
		it('should be an array of strings', function(){
			expect(presidents.names).to.satisfy(isArrayOfStrings);

			function isArrayOfStrings(array){
				return array.every(function(item){
					return typeof item === 'string';
				});
			}
		});

		it('should include `Carlos D. Mesa Gisbert`', function(){
			expect(presidents.names).to.include('Carlos D. Mesa Gisbert');
		});
	});
	
	describe('random', function(){
		it('should return a random item from the presidents.all', function(){
			var randomItem = presidents.random;
			expect(presidents.all).to.include(randomItem);
		});
	});

});