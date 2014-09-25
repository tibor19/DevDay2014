(function () {
    angular.module('recipe')
    .controller('recipeCtrl', ['$scope', 'resourceRecipeService', function ($scope, recipeService) {
        $scope.recipe = {};
        recipeService.getRecipe(1).then(function(data) {
            $scope.recipe = data;
        });
    }]);
})(); 