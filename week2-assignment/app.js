(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['$scope'];
  AlreadyBoughtController.$inject = ['$scope'];
  ShoppingListCheckOffService.$inject = ['$scope'];

  function ToBuyController($scope) {
    var shoppingList = new ShoppingListCheckOffService($scope);
    $scope.item = "";
    $scope.toBuyList = shoppingList.toBuy;
    $scope.itemsToBuy = $scope.toBuyList.length;
    $scope.buyItem = function(itemName,quantity) {
      shoppingList.buyItem(itemName,quantity);
    }
    $scope.boughtList = shoppingList.boughtItems;
  };

  function AlreadyBoughtController($scope) {
    var shoppingList = new ShoppingListCheckOffService($scope);
    $scope.boughtList = shoppingList.boughtItems;
    $scope.itemsBought = $scope.boughtList.length;
    console.log($scope.boughtList);

  };

  function ShoppingListCheckOffService($scope) {
    var service = this;

    service.toBuy = [
                        {
                          'name' : 'cookies',
                          'quantity' : 10
                        },
                        {
                          'name' : 'milk',
                          'quantity' : 2
                        },
                        {
                          'name' : 'coffee',
                          'quantity' : '1 kg'
                        },
                        {
                          'name' : 'bread',
                          'quantity' : 5
                        },
                        {
                          'name' : 'sugar',
                          'quantity' : '1/2 kg'
                        },
      ];
    service.boughtItems = [];
    var items = [];

    service.buyItem = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      service.boughtItems.push(item);
      function isTheName(itemToFind) {
        return itemToFind.name == itemName;
      }
      service.itemToRemove = service.toBuy.find(isTheName);
      service.toBuy.splice(service.toBuy.indexOf(service.itemToRemove),1);
      $scope.itemsToBuy = $scope.toBuyList.length;
    };

  };

})();
