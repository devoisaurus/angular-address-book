app.controller("EntryNewCtrl", function($scope, $http, $location, contactStorage){
	$scope.title = "New Contact";
	$scope.submitButtonText = "Add New Contact"
	$scope.newEntry = {
		birthday: "",
		cityStateZip: "",
		email: "",
		name: "",
		personalNotes: "",
		phoneNumber: "",
		streetAddress: ""
	};



	$scope.addNewEntry = function(){
		contactStorage.addNewEntry($scope.newEntry)
		.then(function successCallback(response){
				console.log(response);
				$location.url("entries/list");
		});
	};
});