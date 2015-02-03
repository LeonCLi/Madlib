var app = angular.mondule('ngMadlibs', ['ngAnimate'])

app.constant('VERSION', "4")
app.run(function(VERSION, $rootScope){
    $rootScope.version = VERSION;
})

app.controller('madLibsController', function($scope){

  $scope.data = {};

   $scope.gender = {
       pronoun: 'she',
       poss: 'her'
   };

   $scope.hideForm = false;

   $scope.submit = function(){
       $scope.hideForm = true;
   }

   $scope.reset = function(){
       $scope.data = {};
       $scope.hideForm = false;
       $scope.submitted = false;
   }


});





//angular.module('ngMadlibs', [])
//  .controller('madlibsController', function ($scope)){
//    $scope.newValue = function(value) {
//      console.log(value);
//        if (value === "male") {
//          $('#inputs').show()
//          $('#male-text').show()
//          $('#female-text').hide()
//        } else if (value === "female"){
//          $('#inputs').show()
//          $('female-text').show()
//          $('#male-text').hide()
//        }
//    }
//  });
