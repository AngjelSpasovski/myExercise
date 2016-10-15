var routerApp = angular.module('routerApp');

routerApp.directive("twoWayDataBindingExamp2.Directive", function () {
    return {
      restrict: "A",
      scope: {myValue: "=myAtrribute"},
	  link: function (scope, iElm, iAttrs) {
	    var x = scope.myValue.name;
	    // x == "Umur";
	    scope.myValue.name = "Kieslowski";
	    // if we go to parent scope (controller's scope, in this example)
	    // $scope.someObject.name == "Kieslowski";
	    // would be true
	  }
    };
});