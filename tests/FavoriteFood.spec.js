describe('Favorite Food Filter', function () {
	var $controller, favoriteFood;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
		favoriteFood = $filter('favoriteFood');
	}));

	it('should return correct food list', function() {
		var testFood = [{
 			name: 'Bob',
 			favoriteFood: 'Pizza'
 		}, {
 			name: 'Tod',
 			favoriteFood: 'Celery'
 		}, {
 			name: 'Yimmy',
 			favoriteFood: 'Pizza'
 		}];

 		var results = favoriteFood(testFood, 'Pizza');

 		expect(results.length).toBe(2);
 		expect(results[0].name).toBe('Bob');
 	});


});
