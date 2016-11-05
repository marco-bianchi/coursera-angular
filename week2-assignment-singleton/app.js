(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyController = this;
    toBuyController.toBuyList = ShoppingListCheckOffService.getToBuyList();

    toBuyController.buyItem = function(itemName,quantity) {
      ShoppingListCheckOffService.buyItem(itemName,quantity);
    }

    toBuyController.removeItem = function(itemIndex) {
      ShoppingListCheckOffService.removeItem(itemIndex);
    }

    toBuyController.boughtList = ShoppingListCheckOffService.getAlreadyBoughtList();

    toBuyController.howManyToBuy = ShoppingListCheckOffService.getHowManyToBuy();
  };

  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;
    alreadyBought.boughtList = ShoppingListCheckOffService.getAlreadyBoughtList();
    alreadyBought.itemsBought = alreadyBought.boughtList.length;
  };

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuy = [
                  { 'name' : 'cookies', 'quantity' : 10 },
                  { 'name' : 'milk','quantity' : 2 },
                  { 'name' : 'coffee', 'quantity' : '1 kg' },
                  { 'name' : 'bread', 'quantity' : 5 },
                  { 'name' : 'sugar', 'quantity' : '1/2 kg' },
                ];

    var boughtItems = [];

    service.buyItem = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      boughtItems.push(item);
    };

    service.removeItem = function (itemIndex) {
      toBuy.splice(itemIndex , 1);
    };

    service.howManyToBuy = toBuy.length;

    service.getToBuyList = function () {
      return toBuy;
    };

    service.getAlreadyBoughtList = function () {
      return boughtItems;
    };

    service.getHowManyToBuy = function () {
      return toBuy.length;
    };

  };

})();
