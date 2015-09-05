angular.module('campApp').controller('itemController', function($scope, $http, $state,$stateParams) {
	 $scope.mySelections = [];
	
	$http({
		method : 'GET',
		url : 'rest/item'
	}).success(function(data, status) {
		console.log(JSON.stringify(data));
		$scope.status = status;
		$scope.itemList = data;
		
		   
	}).error(function(data, status) {
		$scope.itemList = data || "Request failed";
		$scope.status = status;
	});
	
	
	if ($stateParams.id){
		  $scope.id = $stateParams.id;
		  
		  $http({
				method : 'GET',
				url : 'rest/item/' + $scope.id
			}).success(function(data, status) {
				$scope.status = status;
				$scope.formData = data;
				
				console.log("data = " + JSON.stringify(data));
			}).error(function(data, status) {
				$scope.formData = data || "Request failed";
				$scope.status = status;
			});
	}
	
	
	$scope.newItem = function() {
		$scope.formData = {};
		$state.go("item.add");
	}
	
	$scope.save = function() {
		 console.log("data: " + $scope.formData);
		 if ($scope.formData.id){
		  $http( {
				method : 'PUT',
				headers: {'Content-Type': 'application/json'},
				url : 'rest/item/' + $scope.formData.id + ".json",
				data : {'id': $scope.id,
						'name' : $scope.formData.name,
						'description' : $scope.formData.description}
			}).success(function(data) {
				
				$state.go("item.list");
			}).error(function() {
			});
		 } else {
			 $http( {
					method : 'POST',
					headers: {'Content-Type': 'application/json'},
					url : 'rest/item.json',
					data : {
							'name' : $scope.formData.name,
							'description' : $scope.formData.description}
				}).success(function(data) {
					
					$state.go("item.list");
				}).error(function() {
				});
		 }
	};
	
	$scope.deleteItem = function(item){
		 
		if (confirm("Are you sure you want to delete " + item.name + "?")) {
			$http( {
				method : 'DELETE',
				headers: {'Content-Type': 'application/json'},
				url : 'rest/item/' + item.id + ".json",
				data : item
			}).success(function(data) {
				//$state.go("person.list");
				$state.go($state.current, {}, {reload: true});
			}).error(function() {
			});
		}
		
	}
	
	
})