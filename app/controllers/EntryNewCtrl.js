app.controller("EntryNewCtrl", function($scope, $http, $location){
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
		$http.post(
			"https://book-of-addresses.firebaseio.com/contacts.json",
			JSON.stringify({
				birthday: $scope.newEntry.birthday,
				cityStateZip: $scope.newEntry.cityStateZip,
				email: $scope.newEntry.email,
				name: $scope.newEntry.name,
				personalNotes: $scope.newEntry.personalNotes,
				phoneNumber: $scope.newEntry.phoneNumber,
				streetAddress: $scope.newEntry.streetAddress
			})
			).success(function(response){
				console.log(response);
				$location.url("entries/list");
			});
	};
});