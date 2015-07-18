angular.module('campApp').controller('campDetailController', function($scope,$stateParams, $http){
  $scope.id = $stateParams.id;
  
  $http({
		method : 'GET',
		url : 'rest/camps/' + $scope.id
	}).success(function(data, status) {
		$scope.status = status;
		$scope.camp = data;
		console.log("data = " + JSON.stringify(data));
	}).error(function(data, status) {
		$scope.seasons = data || "Request failed";
		$scope.status = status;
	});
  
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
  
  $scope.update = function() {
	  console.log("data: " + $scope.camp);
	  $http( {
			method : 'PUT',
			headers: {'Content-Type': 'application/json'},
			url : 'rest/camps/' + $scope.id + ".json",
			data : {'id': $scope.id,
					'email' : $scope.camp.email,
					'season' : 'http://localhost:8080/camp/rest/season/' + $scope.camp.season.id,
					'location' : $scope.camp.location,
					'count' : $scope.camp.count}
		}).success(function(data) {
			$scope.camp = angular.copy(data);
			alert("Saved!!!");
		}).error(function() {
		});
  }
  
})