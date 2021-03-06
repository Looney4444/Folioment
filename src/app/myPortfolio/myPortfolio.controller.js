'use strict';

angular.module('folioment')
  .filter('prettyJSON', function () {
    return function(json) { return angular.toJson(json, true); }
  })
  .controller('MyPortfolioController', function ($rootScope,$scope,$log,bettermentRiskService,bettermentAssetService,StockDataService) {
    var vm = this;
    vm.allocData = {};
    vm.alloc = {};
    vm.value = {};
    vm.assetClass = {};
    vm.asset = {};
    vm.assetSymbol = "";

    vm.labels = [];
    vm.data = [];

    var myPortfolio = new MyPortfolio();

    var user = new StockDataService(vm.assetSymbol);
    user.getStockInfo().then(function() {
      vm.assetMovement  = user.profile;
    });



    //Example of a Singleton Design Pattern
    bettermentRiskService.getData().success(function(data){
      vm.allocData = data;
    });

    vm.getValue = function(value){
      myPortfolio.setValue(value);
      vm.value = value;

      return vm.value;
    };


    vm.getAlloc = function(risk) {
      for (var i = 0; i < vm.allocData.length; i++) {
        if (vm.allocData[i].risk == risk) {
          myPortfolio.setRisk(risk);
          myPortfolio.setAllocations(vm.allocData[i].allocations);
          vm.alloc = vm.allocData[i].allocations;
        }
      }
      for (var member in vm.alloc) {
        if(vm.alloc[member]==0){
          delete vm.alloc[member];
        }
      }
      return vm.alloc;
    };

    //Example of the Command Design Pattern
    $scope.$watch('myPortfolio.alloc', function() {
      vm.labels = [];
      vm.data = [];
      for(var j in vm.alloc) {
        vm.labels.push(j);
        vm.data.push(vm.alloc[j]);
      }
    });

    vm.onClick = function (points) {
      vm.getAssetClass(points[0].label);
    };

    //Example of a Singleton Design Pattern
    bettermentAssetService.getData().success(function(data){
      vm.assetClass = data;
    });

    vm.getAssetClass = function(label) {
      for (var i = 0; i < vm.assetClass.length; i++) {
        if (vm.assetClass[i].name === label) {
          var str = vm.assetClass[i].tickersExplanation;
          vm.assetSymbol = str.split(" ")[0].replace(/,/g , "");
        }
      }

      var info = new StockDataService(vm.assetSymbol);
      info.getStockInfo().then(function() {
        $log.debug(info.profile);
        vm.assetMovement = info.profile.query.results.quote;
      });

      return vm.assetSymbol;
    };


  });

var Portfolio = function () {

  this.getRisk = function() {
    return this.risk;
  };

  this.setRisk = function(risk) {
    this.risk = risk;
  };

  this.getValue = function() {
    return this.value;
  };

  this.setValue = function(value) {
    this.value = value;
  };

  this.getAllocations = function() {
    return this.allocations;
  };

  this.setAllocations = function(allocations) {
    this.allocations = allocations;
  };

};

function MyPortfolio() {
  this.name = '';
  this.risk = 0.0;
  this.value = 0;
  this.allocations = {};
}

MyPortfolio.prototype = new Portfolio();
