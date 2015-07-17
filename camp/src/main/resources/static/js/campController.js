angular.module('campApp').controller('campController', function($scope, $http ,$stateParams) {
	 $scope.mySelections = [];
	
	$http({
		method : 'GET',
		url : 'rest/camps'
	}).success(function(data, status) {
		console.log(JSON.stringify(data));
		$scope.status = status;
		$scope.campList = data;
		
		   
	}).error(function(data, status) {
		$scope.campList = data || "Request failed";
		$scope.status = status;
	});
	
})