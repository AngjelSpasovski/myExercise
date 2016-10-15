
var routerApp = angular.module('routerApp');

routerApp.directive('helloWorld', function(){
    return {
        template: '<h3>Hello World</h3>'
    }
});
