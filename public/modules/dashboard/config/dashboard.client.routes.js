'use strict';

//Setting up route
angular.module('dashboard').config(['$stateProvider',
	function($stateProvider) {
		// Dashboard state routing
		$stateProvider.
		state('index', {
			url: '/dashboard',
			templateUrl: 'modules/dashboard/views/index.client.view.html'
		});
	}
]);