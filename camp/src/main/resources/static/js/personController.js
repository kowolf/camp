angular.module('campApp').controller('personController', function($scope, $http ,$stateParams) {
	 $scope.mySelections = [];
	
	$http({
		method : 'GET',
		url : 'rest/person'
	}).success(function(data, status) {
		console.log(JSON.stringify(data));
		$scope.status = status;
		$scope.personList = data;
		
		   
	}).error(function(data, status) {
		$scope.personList = data || "Request failed";
		$scope.status = status;
	});
	
	
})