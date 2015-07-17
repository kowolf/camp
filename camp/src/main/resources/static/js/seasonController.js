angular.module('campApp').controller('seasonController', function($scope, $http ,$stateParams) {
	 $scope.mySelections = [];
	
	$http({
		method : 'GET',
		url : 'rest/season'
	}).success(function(data, status) {
		console.log(JSON.stringify(data));
		$scope.status = status;
		$scope.seasonList = data;
		
		   
	}).error(function(data, status) {
		$scope.seasonList = data || "Request failed";
		$scope.status = status;
	});
	
	$scope.update = function() {
		alert("Update Season???");
	};
	
})