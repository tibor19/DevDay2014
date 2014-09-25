(function () {
    angular.module('recipe')
    .controller('recipeCtrl', ['$scope', 'httpRecipeServiceWithQ', function ($scope, recipeService) {
        $scope.recipe = {};
        recipeService.getRecipe(1).then(function(response) {
            $scope.recipe = response.data;
        });
    }]);
})(); 