(function () {
    angular.module('recipe')
    .controller('recipeCtrl', ['$scope', function ($scope) {
        $scope.recipe = recipe;
    }]);
})(); 