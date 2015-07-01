'use strict';

/* Controllers */
/*
var campControllers = angular.module('campControllers', []);

campControllers.controller('formCtrl', function($scope) {
    
    // we will store all of our form data in this object
    $scope.formData = {};
    
    $http({
		method : 'GET',
		url : 'seasons'
	}).success(function(data, status) {
		$scope.status = status;
		$scope.seasons = data;
	}).error(function(data, status) {
		$scope.seasons = data || "Request failed";
		$scope.status = status;
	});
    
    // function to process the form
    $scope.processForm = function() {
        alert('awesome!');  
    };
    
});

campControllers.controller('activityCtrl', [ '$scope','$http',
		function($scope,$http) {
			$http({
				method : 'GET',
				url : 'activity'
			}).success(function(data, status) {
				$scope.status = status;
				$scope.activity = data;
			}).error(function(data, status) {
				$scope.activity = data || "Request failed";
				$scope.status = status;
			});
		} ]);

campControllers.controller('clothingCtrl', [ '$scope','$http', 
		function($scope,$http) {
			$http({
				method : 'GET',
				url : 'clothing'
			}).success(function(data, status) {
				$scope.status = status;
				$scope.clothing = data;
			}).error(function(data, status) {
				$scope.clothing = data || "Request failed";
				$scope.status = status;
			});
		} ]);

campControllers.controller('personalCtrl', [ '$scope','$http',
		function($scope,$http) {
			$http({
				method : 'GET',
				url : 'personal'
			}).success(function(data, status) {
				$scope.status = status;
				$scope.personal = data;
			}).error(function(data, status) {
				$scope.personal = data || "Request failed";
				$scope.status = status;
			});
		} ]);
campControllers.controller('seasonCtrl', [ '$scope','$http',
		function($scope,$http) {
			$http({
				method : 'GET',
				url : 'seasons'
			}).success(function(data, status) {
				$scope.status = status;
				$scope.seasons = data;
			}).error(function(data, status) {
				$scope.seasons = data || "Request failed";
				$scope.status = status;
			});
		} ]);
*/