var app = angular.module("AddressApp", ["ngRoute"])
.constant("firebaseURL", "https://book-of-addresses.firebaseio.com/");

app.config(function($routeProvider){
	$routeProvider.
		when('/entries/list', {
			templateUrl: 'partials/entries-list.html',
			controller: "EntryListCtrl"
	}).
	when('/entries/new', {
		templateUrl: 'partials/entries-new.html',
		controller: "EntryNewCtrl"
	}).
	when('/entries/:contactId', {
		templateUrl: 'partials/entries-details.html',
		controller: "EntryViewCtrl"
	}).
	when('entries/:contactId/edit', {
		templateUrl: 'partials/entries-new.html',
		controller: "EntryEditCtrl"
	}).
	otherwise('/entries/list');
});