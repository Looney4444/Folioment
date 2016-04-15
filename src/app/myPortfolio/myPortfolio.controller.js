'use strict';

angular.module('folioment')
  .controller('MyPortfolioController', function ($rootScope,$scope,$log,bettermentRiskService) {
    var vm = this;
    vm.allocData = {};
    vm.alloc = {};

    vm.labels = [];
    vm.data = [];


    //Example of a Singleton Design Pattern
    bettermentRiskService.getData().success(function(data){
      vm.allocData = data;
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

    //Example of the Command Design Pattern
    $scope.$watch('myPortfolio.alloc', function() {
      vm.labels = [];
      vm.data = [];
      for(var j in vm.alloc) {
        vm.labels.push(j);
        vm.data.push(vm.alloc[j]);
      }
    });


  });
