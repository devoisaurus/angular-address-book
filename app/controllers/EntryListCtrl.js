app.controller("EntryListCtrl", function($scope, $http){
	$scope.entries = [];

		$http.get("https://book-of-addresses.firebaseio.com/contacts.json")
		.success(function(contactList){
			var addressBook = contactList;
			Object.keys(addressBook).forEach(function(key){
				addressBook[key].id=key;
				$scope.entries.push(addressBook[key]);
			})
		})

});