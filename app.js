// app.js
var routerApp = angular.module('routerApp', ['ui.router']); // 'agGrid' , 'ngMaterial'

routerApp.config(function($stateProvider, $urlRouterProvider) { //, $mdThemingProvider
    
    /*$mdThemingProvider.theme('default')
            .primaryPallete('teal')
            .accentPallete('orange');
*/
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'modules/homeMod/views/home.html',
            controller: 'homeController'
        })
        
        // nested list with custom controller
        .state('home.list', {
            url: '/list',
            templateUrl: 'modules/homeMod/views/home-list.html',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
                $scope.messageList = "Message from app.js list controler"
            }
        })

        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'Message: {{messageParagraph}} <br> <br> I could sure use a drink right now.',
            controller: 'home.paragraphController'
        })

        .state('about', {
            url: '/about',
            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'modules/aboutMod/views/about.html' },

                // the child views will be defined here (absolutely named)
                'columnOne@about': { 
                    template: 'Look I am a column!' 
                },

                // for column two, we'll define a separate controller 
                'columnTwo@about': { 
                    templateUrl: 'modules/aboutMod/views/about-table-data.html',
                    controller: 'aboutScotchController'
                }
            }
            
        })

        .state('cellTemplate',{
            url: '/cell-template',
            templateUrl: 'modules/cellTemplateMod/views/cell-template.html',
            controller: 'cellTemplateController'
        })

        .state('twoWaysDataBinding',{
            url: '/two-ways-data-binding',
            templateUrl: 'modules/dataBindingMod/views/two-way-data-binding.html',
            controller: 'dataBinding'
        })

        .state('twoWaysDataBinding.examp1',{
            url: '/examp1',
            templateUrl: 'modules/dataBindingMod/views/two-way-data-binding.examp1.html',
            controller: 'twoWayDataBindingExamp1'
        })

        .state('twoWaysDataBinding.examp2',{
            url: '/examp2',
            templateUrl: 'modules/dataBindingMod/views/two-way-data-binding.examp2.html',
            controller: 'twoWayDataBindingExamp2'
        })

        .state('mdThemingProvider',{
            url: '/theming',
            templateUrl: 'modules/themingMod/views/themingProvider.html',
            controller: 'themingProviderController'
        })

        
}); // closes $routerApp.config()

