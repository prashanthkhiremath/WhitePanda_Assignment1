angular.module('trixEditorApp').controller('outputViewController',outputViewController);

function outputViewController($scope,sharedService) {
    console.log(sharedService.viewDocService());
    sharedService.viewDocService().then(function(response) {
        $scope.textData = response.data[0].textData;
    });
}