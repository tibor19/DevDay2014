(function () {
    angular.module('recipe')
    .controller('recipeCtrl', ['$scope', 'recipeValue', function ($scope, recipe) {
        $scope.recipe = recipe;
    }]);
})(); 