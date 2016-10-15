var routerApp = angular.module('routerApp');

routerApp.directive('zippy', function(){
    return {
        restrict: 'C',
        replace: true,
        scope: { 
            title:'=zippyTitle' 
        },
        template: '<input type="text" value="{{title}}"style="width: 30%"/>',
        link: function(scope, element, attrs) {
        // Your controller
        }
    }
});