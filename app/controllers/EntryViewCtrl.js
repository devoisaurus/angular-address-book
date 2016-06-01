app.controller("EntryViewCtrl", function($scope, $http, $routeParams, contactStorage){
	$scope.contacts = [];
	$scope.selectedContact = {};
	console.log($routeParams.contactId);

	contactStorage.getContacts().then(function(addressBook){
		$scope.contacts = addressBook;

		$scope.selectedContact = $scope.contacts.filter(function(contact){
			return contact.id === $routeParams.contactId
				})[0];
			});
		});
