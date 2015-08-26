angular.module('campApp').controller('personController', function($scope, $http, $state,$stateParams) {
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
	
	
	if ($stateParams.id){
		  $scope.id = $stateParams.id;
		  
		  
		  
		  $http({
				method : 'GET',
				url : 'rest/person/' + $scope.id
			}).success(function(data, status) {
				$scope.status = status;
				$scope.formData = data;
				
				console.log("data = " + JSON.stringify(data));
			}).error(function(data, status) {
				$scope.seasons = data || "Request failed";
				$scope.status = status;
			});
	}
	
	
	$scope.newPerson = function() {
		$scope.formData = {};
		$state.go("person.add");
	}
	
	$scope.save = function() {
		 console.log("data: " + $scope.formData);
		 if ($scope.formData.id){
		  $http( {
				method : 'PUT',
				headers: {'Content-Type': 'application/json'},
				url : 'rest/person/' + $scope.formData.id + ".json",
				data : {'id': $scope.id,
						'name' : $scope.formData.name,
						'email' : $scope.formData.email}
			}).success(function(data) {
				
				$state.go("person.list");
			}).error(function() {
			});
		 } else {
			 $http( {
					method : 'POST',
					headers: {'Content-Type': 'application/json'},
					url : 'rest/person.json',
					data : {
							'name' : $scope.formData.name,
							'email' : $scope.formData.email}
				}).success(function(data) {
					
					$state.go("person.list");
				}).error(function() {
				});
		 }
	};
	
	$scope.deletePerson = function(person){
		 
		if (confirm("Are you sure you want to delete " + person.name + "?")) {
			$http( {
				method : 'DELETE',
				headers: {'Content-Type': 'application/json'},
				url : 'rest/person/' + person.id + ".json",
				data : person
			}).success(function(data) {
				//$state.go("person.list");
				$state.go($state.current, {}, {reload: true});
			}).error(function() {
			});
		}
		
	}
	
	
})