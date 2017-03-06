import { expect } from 'chai';
import presidents from '../src/index.js';

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

		it('should return an array of random items if given a number', function(){
			var randomItems = presidents.nrandom(3);
			expect(randomItems).to.have.length(3);
			randomItems.forEach(function(item){
				expect(presidents.all).to.include(item);
			});
		});
	});

});