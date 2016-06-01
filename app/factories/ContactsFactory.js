app.factory("contactStorage", function($q, $http, firebaseURL){

 	var getContacts = function(){
 			var entries = [];
 			return $q(function(resolve, reject){
 			$http.get(firebaseURL + "contacts.json")
 				.success(function(contactList){
 						var addressBook = contactList;
 						Object.keys(addressBook).forEach(function(key){
 							addressBook[key].id=key;
 							entries.push(addressBook[key]);
 		   			});
 						resolve(entries);
 	   		})
 				.error(function(error){
 	   			 reject(error);
 	   		});
 	 		});
  	};

  	var deleteContact = function(contactId){
  		return $q(function(resolve, reject){
  			$http
  			.delete(firebaseURL + "contacts/" + contactId + ".json")
  			.success(function(objectFromFirebase){
  				resolve(objectFromFirebase);
  		});
  		});
  	};

  	var addNewEntry = function(newEntry){
  		return $q(function(resolve, reject){
  			$http.post(
  				firebaseURL + "contacts.json",
  				JSON.stringify({
  					birthday: newEntry.birthday,
						cityStateZip: newEntry.cityStateZip,
						email: newEntry.email,
						name: newEntry.name,
						personalNotes: newEntry.personalNotes,
						phoneNumber: newEntry.phoneNumber,
						streetAddress: newEntry.streetAddress
  				})
  		)
  			.success(
  				function(objectFromFirebase){
  					resolve(objectFromFirebase);
  				}
  				);
  	});
  	};
  		return {getContacts:getContacts, deleteContact:deleteContact, addNewEntry:addNewEntry};

});