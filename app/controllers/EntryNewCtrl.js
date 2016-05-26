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
		$scope.newEntry.id = $scope.entries.length;
		console.log("you added a new item", $scope.newEntry);
		$scope.entries.push($scope.newEntry);
		$scope.newEntry = "";
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
				$location.url("entries/list")
			})
	};
});