angular.module('campApp').controller('formController', function($scope, $http) {

	// we will store all of our form data in this object
	$scope.formData = {};
	$scope.formMaster = angular.copy($scope.formData);
	$scope.campId = 0;

	$http({
		method : 'GET',
		url : 'rest/season'
	}).success(function(data, status) {
		$scope.status = status;
		$scope.seasons = data;
	}).error(function(data, status) {
		$scope.seasons = data || "Request failed";
		$scope.status = status;
	});

	// function to process the form
	$scope.saveCamp = function() {
		var req = {
			method : 'POST',
			url : 'rest/camps',
			data : {
				email : $scope.formData.email,
				seasonId : $scope.formData.seasonId,//TODO: Rework to use Season object
				location : $scope.formData.location,
				count : $scope.formData.count
			},
		}

		$http(req).success(function() {
		}).error(function() {
		});
	};

	$scope.resetCamp = function() {
		$scope.formData = angular.copy({});
	};

	$scope.loadCamp = function(campId) {
		var req = {
			method : 'GET',
			url : 'rest/camps/' + campId
		}

		$http(req).success(function(data) {
			console.log(JSON.stringify(data));
			$scope.formData = angular.copy(data);
		}).error(function() {
		});
	};

});