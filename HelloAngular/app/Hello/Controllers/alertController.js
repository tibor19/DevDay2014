(function() {
    var module = angular.module('hello');
    module.controller('alertController',[
        '$scope', function ($scope) {
            $scope.name = 'Tibi';
            $scope.alert = function (msg) {
                alert(msg + $scope.name);
            }
        }
    ]);
})();