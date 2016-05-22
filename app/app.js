var app = angular.module("AddressApp", ["ngRoute"]);

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
	when('/entries/details', {
		templateUrl: 'partials/entries-details.html',
		controller: "EntryViewCtrl"
	}).
	otherwise('/entries/list');
});