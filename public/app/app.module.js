(function (angular) {
    angular.module("trixEditorApp",['ngRoute','angularTrix']).config(config);

    function config($routeProvider) {
      $routeProvider
        .when('/', {
            templateUrl: 'app/input-view/input-view.html',
            controller: inputViewController
        })
        .when('/outputview', {
          templateUrl: 'app/output-view/output-view.html',
          controller: outputViewController,
        })
        .otherwise({
          redirectTo: '/'
        });
    }
})(angular);