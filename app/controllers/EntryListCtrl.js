app.controller("EntryListCtrl", function($scope, $http){
	$scope.entries = [];
	var getContacts = function(){
		$http.get("https://book-of-addresses.firebaseio.com/contacts.json")
		.success(function(contactList){
			var addressBook = contactList;
			Object.keys(addressBook).forEach(function(key){
				addressBook[key].id=key;
				$scope.entries.push(addressBook[key]);
			});
	});
};

	getContacts();
		$scope.deleteContact = function(contactId){
			console.log(contactId);
			$http
			.delete(`https://book-of-addresses.firebaseio.com/contacts/${contactId}.json`)
			.success(function(response){
				console.log(response);
				$scope.entries=[];
				getContacts();
			});
		};
});

