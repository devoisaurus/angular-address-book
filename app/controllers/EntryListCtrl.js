app.controller("EntryListCtrl", function($scope, $http, $location, contactStorage){
	$scope.entries = [];

	contactStorage.getContacts().then(function(addressBook){
		$scope.entries = addressBook;
	})

		$scope.deleteContact = function(contactId){
			console.log("contactID", contactId);
			contactStorage.deleteContact(contactId).then(function(response){
				contactStorage.getContacts().then(function(addressBook){
					$scope.entries = addressBook;
				});
			});
		};
});

