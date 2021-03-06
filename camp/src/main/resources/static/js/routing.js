angular.module('campApp')

// configuring our routes
// =============================================================================
.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider


	// (/home)
	.state('camp', {
		url : '/camp',
		templateUrl : 'camp.html',
		controller : 'campController'
	}).state('camp.list', {
		url : '/list',
		templateUrl : 'camp-list.html'
	}).state('camp.edit', {
		url : '/edit/:id',
		templateUrl : 'camp-edit.html',
		controller : 'campDetailController'
		
	})
	
	// (/person)
	.state('person', {
		url : '/person',
		templateUrl : 'person.html',
		controller : 'personController'
	}).state('person.list', {
		url : '/list',
		templateUrl : 'person-list.html',
		controller : 'personController'
	}).state('person.add', {
		url : '/add',
		templateUrl : 'person-form.html',
		controller : 'personController'
	}).state('person.edit', {
		url : '/edit/:id',
		templateUrl : 'person-form.html',
		controller : 'personController'
	})
	
	// (/item)
	.state('item', {
		url : '/item',
		templateUrl : 'item.html',
		controller : 'itemController'
	}).state('item.list', {
		url : '/list',
		templateUrl : 'item-list.html',
		controller : 'itemController'
	}).state('item.add', {
		url : '/add',
		templateUrl : 'item-form.html',
		controller : 'itemController'
	}).state('item.edit', {
		url : '/edit/:id',
		templateUrl : 'item-form.html',
		controller : 'itemController'
	})
	
	// (/season)
	.state('season', {
		url : '/season',
		templateUrl : 'season.html',
		controller : 'seasonController'
	})
	.state('season.list', {
		url : '/list',
		templateUrl : 'season-list.html',
		controller : 'seasonController'
	}).state('season.edit', {
		url : '/edit/:id',
		templateUrl : 'season-edit.html',
		controller : 'seasonDetailController'
		
	})

	// route to show our basic form (/form)
	.state('form', {
		url : '/form',
		templateUrl : 'form.html',
		controller : 'formController'
	})

	// url will be /form/season
	.state('form.email', {
		url : '/email',
		templateUrl : 'form-email.html'
	})

	// url will be /form/season
	.state('form.season', {
		url : '/season',
		templateUrl : 'form-season.html'
	})

	// url will be /form/location
	.state('form.location', {
		url : '/location',
		templateUrl : 'form-location.html'
	})

	// url will be /form/count
	.state('form.count', {
		url : '/count',
		templateUrl : 'form-count.html'
	});

	// catch all route
	// send users to the form page
	$urlRouterProvider.otherwise('/camp/list');
})