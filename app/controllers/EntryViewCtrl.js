app.controller("EntryViewCtrl", function($scope, $http, $routeParams){
	$scope.contacts = [];
	$scope.selectedContact = {};
	console.log($routeParams.contactId);

	$http.get("https://book-of-addresses.firebaseio.com/contacts.json")
		.success(function(contactList){
			var addressBook = contactList;
			Object.keys(addressBook).forEach(function(key){
				addressBook[key].id=key;
				$scope.contacts.push(addressBook[key]);
				$scope.selectedContact = $scope.contacts.filter(function(contact){
					return contact.id === $routeParams.contactId;
				})[0];
			});
		});
});