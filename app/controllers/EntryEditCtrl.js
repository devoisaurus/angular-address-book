app.controller("EntryEditCtrl", function($scope, $http, $location, contactStorage, $routeParams){
	$scope.title = "Edit Contact";
	$scope.submitButtonText = "Update Contact Information";
	$scope.newEntry = {};

	contactStorage.getSingleContact($routeParams.contactId)
	.then(function successCallback(response){
		$scope.newEntry = response;
		console.log("response1", response);
	});

 $scope.addNewEntry = function(){
 	contactStorage.updateContact($routeParams.contactId, $scope.newEntry)
 	.then(function successCallback(response){
 		console.log("response", response);
 		$location.url("/entries/list");
 	});
 };
});