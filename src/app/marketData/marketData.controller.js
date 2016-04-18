'use strict';

angular.module('folioment')
  .controller('MarketDataController', function ($log,bettermentAssetService) {
    var vm = this;    vm.label = "US_TOTAL_MARKET_STOCKS";

    vm.assetClass = {};
    vm.asset = {};
    vm.assetSymble = "";

    //Example of a Singleton Design Pattern
    bettermentAssetService.getData().success(function(data){
      vm.assetClass = data;
    });

    vm.getAssetClass = function(label) {
      for (var i = 0; i < vm.assetClass.length; i++) {
        if (vm.assetClass[i].name === label) {
          var str = vm.assetClass[i].tickersExplanation;
          vm.assetSymble = str.split(",")[0];
        }
      }
      return vm.assetSymble;
    };

  });
