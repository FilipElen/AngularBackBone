'use strict'

angular.module('App', ['ngRoute'])

.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'assets/views/home.html',
      controller: 'homeCtrl'
    }).when('/persons',{
      templateUrl: 'assets/views/persons.html',
      controller: 'personsCtrl'
    })
    .otherwise({
      redirectTo: '/home'
    });
})
.controller('homeCtrl', ['$scope', function homeCtrl($scope) {}])
.controller('personsCtrl',['$scope', 'personSrv', function($scope, personSrv){
  $scope.persons = personSrv.getAllPersons();
  console.log($scope.persons);
}])
.service('personSrv',function(){
  var persons = [{
    'id': 0,
    'name' : 'Winston Churchill'
  },{
    'id': 1,
    'name' : 'Albert Einstein'
  }];
  return {
    getAllPersons: function(){
      return persons;
    },
    getPerson: function(personId){
      for (var i = 0; i < persons.length; i++) {
        if (persons[i] == personId) {
          return perons[i];
        }
        return null;
      }
    }
  }
})
.service('quotersSrv', function(){
  var quotes[
    id : 0,
    quotes:['quote Churchill1', 'quote Churchill2']
  ];
})
.config(function($compileProvider) {
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|sms):/);
})
