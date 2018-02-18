angular.module("trixEditorApp").controller('inputViewController', inputViewController);

function inputViewController($scope,sharedService, $window,$interval) {

    $scope.ctrlDown = false;
	$scope.ctrlKey = 17;

    $scope.saveDoc = function () {
        sharedService.saveDocService($scope.textData).then(function(response) {
            if (response.status === 201) {
                $route.reload();
            }
        })
    }

    // For Keyboard Shortcut
    $scope.keyDownFunc = function($event) {
        if ($scope.ctrlDown && String.fromCharCode($event.which).toLowerCase() == 's') {
            $event.preventDefault();
            $scope.saveDoc();
        }
    }

    angular.element($window).bind("keyup", function($event) {
        if ($event.keyCode == $scope.ctrlKey)
            $scope.ctrlDown = false;
            $scope.$apply();
    });

    angular.element($window).bind("keydown", function($event) {
        if ($event.keyCode == $scope.ctrlKey)
            $scope.ctrlDown = true;
            $scope.$apply();
    });

    // For Auto-save
    $interval(function () {
        $scope.saveDoc();
    }, 10000);
}
