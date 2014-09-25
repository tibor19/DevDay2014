(function() {
    'use strict';

    angular
        .module('recipe')
        .directive('recipeInstructions', recipeInstructions);

    function recipeInstructions () {
        // Usage:
        // 
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'EA',
            templateUrl: 'app/recipe/templates/instructions.html',
            scope : {
                instructions : '=data'
            }

        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

})();