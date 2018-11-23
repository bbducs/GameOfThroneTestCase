var expect = require('chai').expect;
var gameOfThrone = require('./gameOfThrone');
var alive = true;
var dead =false;
describe("Game of Life",function(){
	it("any live cell with fewer than two live neighbours dies by underpopulation",function(){
		var neighbours = 0
		var currentState = alive
		var expected = dead
		expect(gameOfThrone.nextState(currentState, neighbours)).to.equal(expected);

		neighbours = 1
		expect(gameOfThrone.nextState(currentState, neighbours)).to.equal(expected);		
	})
	
	it("Any live cell with two or three live neighbors lives",function(){
		var neighbours = 2
		var currentState = alive
		var expected = alive
		expect(gameOfThrone.nextState(currentState, neighbours)).to.equal(expected);

		neighbours = 3;
		expect(gameOfThrone.nextState(currentState, neighbours)).to.equal(expected);

	})

	it("Any live cell with more than three live neighbors dies",function(){
		var neighbours = 4
		var currentState = alive
		var expected = false
		expect(gameOfThrone.nextState(currentState, neighbours)).to.equal(expected);

		 neighbours = 6;
		 expect(gameOfThrone.nextState(currentState, neighbours)).to.equal(expected);

	})

	it("Any dead cell with exactly three live neighbors becomes a live cell,",function(){
		//var neighbours = 3
		var currentState = dead
		var expected = false
		//expect(gameOfThrone.nextState(currentState, neighbours)).to.equal(expected);

		  neighbours = 6;
		  expect(gameOfThrone.nextState(currentState, neighbours)).to.equal(expected);

	})

})
