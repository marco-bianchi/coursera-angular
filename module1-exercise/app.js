(function () {

'use strict';

angular.module("LunchCheck", [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.name = "Lunch Checker";
  $scope.list = "";
  $scope.numberOfDishes = 0;
  $scope.message = "";
  $scope.checkLunch = function () {
    $scope.dishes = $scope.list.split(",");
    console.log($scope.dishes);

    $scope.numberOfDishes = $scope.dishes.length;
    console.log($scope.numberOfDishes);
    if($scope.numberOfDishes > 3) {
      $scope.message = "Too much!";
    }
    else {
      $scope.message = "Ok, that's right!";
    }
  };
  console.log($scope.numberOfDishes);
  // $scope.upper = function () {
  //   var upCase = $filter('uppercase');
  //   $scope.name = upCase($scope.name);
  // };
}


})();
