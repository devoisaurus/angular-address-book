app.controller("EntryNewCtrl", function($scope){
	$scope.newEntry = {};

	$scope.entries = [
	{
		id: 0,
		name: "Buffy Summers",
		nickName: "Buff",
		streetAddress: "123 Somestreet",
		cityStateZip: "Sunnydale, CA 90131",
		email: "buff@vampslayers.org",
		phoneNumber: "(341)555-9275",
		personalNotes: "the Slayer?"
			},
			{
		id: 1,
		name: "Ian Malcom",
		nickName: "",
		streetAddress: "275 Streetname",
		cityStateZip: "Austin, TX 38759",
		email: "DrMalcom@uta.edu",
		phoneNumber: "(373)555-9646",
		personalNotes: "mumbles about Chaos theory a lot"
			},
			{
		id: 2,
		name: "Harleen Quinzel",
		nickName: "Harley",
		streetAddress: "13411 Belle Reve",
		cityStateZip: "Arkham, MA 42562",
		email: "DrQuinzel@arkham.org",
		phoneNumber: "(728)145-2855",
		personalNotes: "slightly unhinged"
			}
		];

	$scope.addNewEntry = function(){
		$scope.newEntry.id = $scope.entries.length;
		$scope.entries.push($scope.newEntry);
		$scope.newEntry = "";
	};
});