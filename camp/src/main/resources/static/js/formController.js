angular
		.module('campApp')
		.controller(
				'formController',
				function($scope, $http, $document) {

					// we will store all of our form data in this object
					$scope.formData = {};
					$scope.formMaster = angular.copy($scope.formData);
					$scope.campId = 0;
					
					$scope.campPersons = {};
					$scope.campPersons.selectedPersons = [];

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
					
					$http({
						method : 'GET',
						url : 'rest/person'
					}).success(function(data, status) {
						//console.log(JSON.stringify(data));
						$scope.status = status;
						$scope.personList = data;				   
					}).error(function(data, status) {
						$scope.personList = data || "Request failed";
						$scope.status = status;
					});

					// function to process the form
					$scope.saveCamp = function() {
						
						var thePersons = [];
						
						for (var i = 0; i < $scope.campPersons.selectedPersons.length; i++) {
							thePersons
									.push('http://localhost:8080/camp/rest/person/'
										+ $scope.campPersons.selectedPersons[i].id);
						}
						
						var req = {
							method : 'POST',
							url : 'rest/camps',
							data : {
								email : $scope.formData.email,
								season : 'http://localhost:8080/camp/rest/season/'
										+ $scope.formData.seasonId,
								// seasonId : $scope.formData.seasonId,//TODO:
								// Rework to use Season object
								locationOrigin : $scope.directions.origin,
								locationDestination: $scope.directions.destination,
								count : $scope.formData.count,
								personList:thePersons
							},
						}

						$http(req).success(
								function() {
									$('.single-message').notify(
											'Camp saved successfully!!!', {
												className : 'success',
												autoHideDelay : 7000,
												elementPosition : ' right',
											});
								}).error(
								function() {
									$('.single-message').notify(
											'Camp failed to saved!!!', {
												className : 'error',
												autoHideDelay : 7000,
												elementPosition : ' right',
											});
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
							//console.log(JSON.stringify(data));
							$scope.formData = angular.copy(data);
						}).error(function() {
						});
					};


			
					
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
					  
					  // directions object -- with defaults
					  $scope.directions = {
					    origin: "5246 West Gossamer Way RIVERTON, UTAH",
					    destination: "",
					    showList: false
					  }
					  
					  // get directions using google maps api
					  $scope.getDirections = function () {
					    var request = {
					      origin: $scope.directions.origin,
					      destination: $scope.directions.destination,
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
					

					  });