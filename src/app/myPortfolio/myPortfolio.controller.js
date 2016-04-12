'use strict';

angular.module('folioment')
  .controller('MyPortfolioController', function ($rootScope,$scope,$log,bettermentRiskFactory) {
    var vm = this;
    vm.allocData = {};
    vm.alloc = {};

    vm.labels = [];
    vm.data = [];

    bettermentRiskFactory.getData().success(function(data){
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

    $scope.$watch('myPortfolio.alloc', function() {
      vm.labels = [];
      vm.data = [];
      for(var j in vm.alloc) {
        vm.labels.push(j);
        vm.data.push(vm.alloc[j]);
      }
    });


  });
