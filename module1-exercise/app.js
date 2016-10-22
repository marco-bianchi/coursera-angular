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
    }
    else if ($scope.numberOfDishes > 3) {
      $scope.message = "Too much!";
    }
    else if ($scope.numberOfDishes < 3){
      $scope.message = "Enjoy!";
    }
  };
  $scope.countDishes = function (item,index,arr) {
    if (item.trim() != "") {
      $scope.numberOfDishes ++;
    }
  };
}
})();
