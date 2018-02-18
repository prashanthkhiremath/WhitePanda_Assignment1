angular.module('trixEditorApp').directive('mhNavigation', mhNavigation);

function mhNavigation() {
    return {
        restrict: 'E',
        templateUrl: 'app/navigation-directive/navigation-directive.html'
    }
}