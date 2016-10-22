(function () {

'use strict';

angular.module("LunchCheck", [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.name = "Lunch Checker";
  $scope.list = "";
  $scope.message = "";
  $scope.checkLunch = function () {
    $scope.numberOfDishes = 0;
    $scope.dishes = $scope.list.split(",");
    $scope.dishes.forEach($scope.countDishes);
    if($scope.numberOfDishes === 0) {
      $scope.message = "Please, enter data first.";
      $scope.class = "red";
    }
    else if ($scope.numberOfDishes > 3) {
      $scope.message = "Too much!";
      $scope.class = "green";
    }
    else if ($scope.numberOfDishes < 3){
      $scope.message = "Enjoy!";
      $scope.class = "green";
    }
  };
  $scope.countDishes = function (item,index,arr) {
    if (item.trim() != "") {
      $scope.numberOfDishes ++;
    }
  };
}
})();
