(function() {
    'use strict';

    angular
        .module('recipe')
        .directive('recipeDetails', recipeDetails);

    function recipeDetails () {
        // Usage:
        // 
        // Creates:
        // 
        var directive = {
            controller: 'recipeCtrl',
            templateUrl: 'app/recipe/templates/details.html',
            restrict: 'EA',
            scope: {}
        };
        return directive;

    }

})();