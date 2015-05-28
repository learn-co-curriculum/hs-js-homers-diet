'use strict';

describe('no donuts', function () {
	
	it('tells Homer good job for not eating donuts', function () {
		expect(noDonuts(0)).toEqual("Good job, Homer!");
	})
})