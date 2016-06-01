"use strict";

app.factory("contactStorage", function($q, $http){

 	var getContacts = function(){
 			let entries = [];
 			return $q(function(resolve, reject){
 			$http.get("https://book-of-addresses.firebaseio.com/contacts.json")
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
  			.delete(`https://book-of-addresses.firebaseio.com/contacts/${contactId}.json`)
  			.success(function(objectFromFirebase){
  				resolve(objectFromFirebase);
  		});
  		});
  	};

  	var addNewEntry = function(newEntry){
  		return $q(function(resolve, reject){
  			$http.post(
  				"https://book-of-addresses.firebaseio.com/contacts.json",
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