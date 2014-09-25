(function() {
    'use strict';

    angular
        .module('recipe')
        .directive('recipeInstructions', [
            '$window', function($window) {
                // Usage:
                // 
                // Creates:
                // 
                var directive = {
                    link: link,
                    //requires : '?recipeDetails',
                    restrict: 'EA',
                    templateUrl: 'app/recipe/templates/instructions.html',
                    replace : true,
                    scope: {
                        instructions: '=data'
                    }
                };
                return directive;

                function link(scope, element, attrs, ctrls) {
                    
                }
            }
        ]);

})();