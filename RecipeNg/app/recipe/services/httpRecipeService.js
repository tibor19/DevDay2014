(function () {
    angular.module('recipe').factory('httpRecipeService', ["$http", function ($http) {

            return {
                getRecipe: function (recipeId, successFn) {
                    return $http.get('api/Recipes/' + recipeId)
                        .success(function(data) {
                            successFn(data);
                        })
                        .error(function(data, status) {
                        console.log(status);
                    });
                    // return $http({ method: 'Get', url: 'api/Recipes/' + recipeId });
                },
                getRecipes: function () {
                    return $http({ method: 'Get', url: 'api/Recipes' });
                }
            }
        }]);

})();