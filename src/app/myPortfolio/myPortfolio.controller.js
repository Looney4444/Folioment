'use strict';

angular.module('folioment')
  .controller('MyPortfolioController', function ($rootScope,$scope,$log,bettermentRiskFactory) {
    var vm = this;
    vm.allocData = {};


    bettermentRiskFactory.getData().success(function(data){
      vm.allocData = data;
      $log.info(data);
    });

    vm.getAlloc = function(value) {
      var arrayLength = vm.allocData.length;
      for (var i = 0; i < arrayLength; i++) {
        if (vm.allocData[i].risk == value) {
          vm.alloc = vm.allocData[i].allocations;
        }
      }
      return vm.alloc;
    };

  });
