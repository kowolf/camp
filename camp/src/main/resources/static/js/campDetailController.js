angular.module('campApp').controller('campDetailController', function($scope,$stateParams, $http){
  $scope.id = $stateParams.id;
  
  $scope.campPersons = {};
  $scope.campPersons.selectedPersons = [];
  
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
  

	$http({
		method : 'GET',
		url : 'rest/camps/' + $scope.id
	}).success(function(data, status) {
		$scope.status = status;
		$scope.camp = data;
		$scope.campPersons.selectedPersons = $scope.camp.personList;
		// directions object -- with defaults
		$scope.directions = {
			origin : data.locationOrigin,
			destination : data.locationDestination,
			showList : false
		}
		
		$scope.getDirections();
	
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

	var thePersons = [];

	for (var i = 0; i < $scope.campPersons.selectedPersons.length; i++) {
		thePersons
				.push('http://localhost:8080/camp/rest/person/'
					+ $scope.campPersons.selectedPersons[i].id);
	}

	$http(
		{
			method : 'PUT',
			headers : {
				'Content-Type' : 'application/json'
			},
			url : 'rest/camps/' + $scope.id + ".json",
			data : {
				'id' : $scope.id,
				'email' : $scope.camp.email,
				'season' : 'http://localhost:8080/camp/rest/season/' + $scope.camp.season.id,
				'locationOrigin' : $scope.camp.locationOrigin,
				'locationDestination' : $scope.camp.locationDestination,
				'count' : $scope.camp.count,
				'personList' : thePersons
			}
		})
	.success(function(data) {
		$('.single-message').notify('Camp saved successfully!!!', 
				{
					className:'success',
					autoHideDelay: 7000,
					elementPosition: ' right',
				}
		);
		$scope.camp = angular.copy(data);
	})
	.error(function() {
		$('.single-message').notify('Camp failed to saved!!!', 
				{
					className:'error',
					autoHideDelay: 7000,
					elementPosition: 'right',
				}
			);
	});
}
  
//DIRECTIONS
	// map object
	  $scope.map = {
	    control: {},
	    center: {
	        latitude: 40.501302,
	        longitude: -112.016033
	    },
	    zoom: 14
	  };
	  
	  // marker object
	  $scope.marker = {
	    center: {
	        latitude: 40.501302,
	        longitude: -112.016033
	    }
	  }
	  
	  // instantiate google map objects for directions
	  var directionsDisplay = new google.maps.DirectionsRenderer();
	  var directionsService = new google.maps.DirectionsService();
	  var geocoder = new google.maps.Geocoder();
	  
	  
	  
	  // get directions using google maps api
	  $scope.getDirections = function () {
	    var request = {
	      origin: $scope.camp.locationOrigin,
	      destination: $scope.camp.locationDestination,
	      travelMode: google.maps.DirectionsTravelMode.DRIVING
	    };
	    directionsService.route(request, function (response, status) {
	      if (status === google.maps.DirectionsStatus.OK) {
	        directionsDisplay.setDirections(response);
	        directionsDisplay.setMap($scope.map.control.getGMap());
	        directionsDisplay.setPanel(document.getElementById('directionsList'));
	        $scope.directions.showList = true;
	      } else {
	        alert('Google route unsuccesfull!');
	      }
	    });
	
	  }	
  
})