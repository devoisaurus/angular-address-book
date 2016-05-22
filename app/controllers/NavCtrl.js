app.controller("NavCtrl", function($scope){
	$scope.navItems = [
	{
		name: "Logout",
		url: '#/logout'
	},
	{
		name: "All Entries",
		url: '#/entries/list'
	},
	{
		name: "New Entry",
		url: '#/entries/new'
	}
	];
});