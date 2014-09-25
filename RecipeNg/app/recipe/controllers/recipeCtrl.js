(function () {
    angular.module('recipe')
    .controller('recipeCtrl', ['$scope', 'httpRecipeService', function ($scope, recipeService) {
        $scope.recipe = {};
        recipeService.getRecipe(1, function(data) {
            $scope.recipe = data;
        });
    }]);
})(); 