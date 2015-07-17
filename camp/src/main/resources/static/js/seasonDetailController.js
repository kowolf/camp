.controller('seasonDetailController', function($scope, $stateParams, $http, notify) {
	$scope.id = $stateParams.id;
	
	$scope.seasonItems = {};
	$scope.seasonItems.selectedItems = [];

	$http({
		method : 'GET',
		url : 'rest/season/' + $scope.id + '.json'
	}).success(function(data, status) {
		$scope.status = status;
		$scope.season = data;
		$scope.seasonItems.selectedItems = $scope.season.items;
		console.log("data = " + JSON.stringify(data));
	}).error(function(data, status) {
		$scope.seasons = data || "Request failed";
		$scope.status = status;
	});
	
	
	$http({
		method : 'GET',
		url : 'rest/item'
	}).success(function(data, status) {
		console.log(JSON.stringify(data));
		$scope.status = status;
		$scope.itemList = data;
		
		//$scope.seasonItems = {};
		//$scope.seasonItems.selectedItems = [$scope.itemList[0],$scope.itemList[3]];
		
		   
	}).error(function(data, status) {
		$scope.campList = data || "Request failed";
		$scope.status = status;
	});
	
	$scope.updateItemList = function() {
		
		var theItems = [];
		
		for(var i=0;i<$scope.seasonItems.selectedItems.length;i++){
			theItems.push('http://localhost:8080/camp/rest/item/' + $scope.seasonItems.selectedItems[i].id);
		}
		
		$http({
			method : 'PUT',
			headers : {
				'Content-Type' : 'application/json'
			},
			url : 'rest/season/' + $scope.id ,
			data : {
				'id' : $scope.season.id,
				'name': $scope.season.name,
				'items': theItems				
			}
		}).success(function(data) {
			//TODO - Need a notify message here
			$scope.season = angular.copy(data);
			}).error(function() {
				//TODO - Need to do something on error
		});
	};
	
	

	$scope.enable = function() {
		$scope.disabled = false;
	};

	$scope.disable = function() {
		$scope.disabled = true;
	};

	$scope.enableSearch = function() {
		$scope.searchEnabled = true;
	}

	$scope.disableSearch = function() {
		$scope.searchEnabled = false;
	}

	$scope.person = {};

})