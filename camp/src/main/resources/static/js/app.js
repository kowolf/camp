// create our angular app and inject ngAnimate and ui-router 
// =============================================================================
angular.module('campApp', [ 'ngAnimate', 'ui.router','ngGrid','ngSanitize','ui.select' ])

// configuring our routes
// =============================================================================
.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider


	// (/home)
	.state('camp', {
		url : '/camp',
		templateUrl : 'camp.html',
		controller : 'campController'
	}).state('camp.list', {
		url : '/list',
		templateUrl : 'camp-list.html'
	}).state('camp.edit', {
		url : '/edit/:id',
		templateUrl : 'camp-edit.html',
		controller : 'campDetailController'
		
	})
	
	// (/season)
	.state('season', {
		url : '/season',
		templateUrl : 'season.html',
		controller : 'seasonController'
	})
	.state('season.list', {
		url : '/list',
		templateUrl : 'season-list.html',
		controller : 'seasonController'
	}).state('season.edit', {
		url : '/edit/:id',
		templateUrl : 'season-edit.html',
		controller : 'seasonDetailController'
		
	})

	// route to show our basic form (/form)
	.state('form', {
		url : '/form',
		templateUrl : 'form.html',
		controller : 'formController'
	})

	// url will be /form/season
	.state('form.email', {
		url : '/email',
		templateUrl : 'form-email.html'
	})

	// url will be /form/season
	.state('form.season', {
		url : '/season',
		templateUrl : 'form-season.html'
	})

	// url will be /form/location
	.state('form.location', {
		url : '/location',
		templateUrl : 'form-location.html'
	})

	// url will be /form/count
	.state('form.count', {
		url : '/count',
		templateUrl : 'form-count.html'
	});

	// catch all route
	// send users to the form page
	$urlRouterProvider.otherwise('/camp/list');
})

//filter
.filter('propsFilter', function() {
  return function(items, props) {
    var out = [];

    if (angular.isArray(items)) {
      items.forEach(function(item) {
        var itemMatches = false;

        var keys = Object.keys(props);
        for (var i = 0; i < keys.length; i++) {
          var prop = keys[i];
          var text = props[prop].toLowerCase();
          if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
            itemMatches = true;
            break;
          }
        }

        if (itemMatches) {
          out.push(item);
        }
      });
    } else {
      // Let the output be the input untouched
      out = items;
    }

    return out;
  };
})

// our controller for the form
// =============================================================================
.controller('homeController', function($scope, $http) {
	$scope.formData = {};
	$scope.data = {
		'test' : 'This is a test!!!'
	};

	console.log("Here!!!");

})

.controller('campController', function($scope, $http ,$stateParams) {
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


.controller('seasonController', function($scope, $http ,$stateParams) {
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

.controller('seasonDetailController', function($scope, $stateParams, $http) {
	$scope.id = $stateParams.id;

	$http({
		method : 'GET',
		url : 'rest/season/' + $scope.id + '.json'
	}).success(function(data, status) {
		$scope.status = status;
		$scope.season = data;
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
		
		   
	}).error(function(data, status) {
		$scope.campList = data || "Request failed";
		$scope.status = status;
	});

	$scope.update = function() {
		console.log("data: " + $scope.camp);
		$http({
			method : 'PUT',
			headers : {
				'Content-Type' : 'application/json'
			},
			url : 'rest/season/' + $scope.id + ".json",
			data : {
				'id' : $scope.id
			}
		}).success(function() {
			alert("Saved!!!");
		}).error(function() {
		});
	}

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

	
	$scope.items = [ {
		id : 1,
		name : 'Coat',
		description : 'Warm Coat'
	}, {
		id : 2,
		name : 'Socks',
		description : 'Everyday socks'
	}, {
		id : 3,
		name : 'Boots',
		description : 'Water proof hiking boot'
	} ];
	
	$scope.multipleDemo = {};
	$scope.multipleDemo.selectedPeople = [$scope.items[0]];

	$scope.person = {};
	

})


.controller('campDetailController', function($scope,$stateParams, $http){
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
		url : 'rest/seasons'
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
					'seasonId' : $scope.camp.seasonId,
					'location' : $scope.camp.location,
					'count' : $scope.camp.count}
		}).success(function() {
			alert("Saved!!!");
		}).error(function() {
		});
  }
  
})

.controller('formController', function($scope, $http) {

	// we will store all of our form data in this object
	$scope.formData = {};
	$scope.formMaster = angular.copy($scope.formData);
	$scope.campId = 0;

	$http({
		method : 'GET',
		url : 'rest/seasons'
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
				seasonId : $scope.formData.seasonId,
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