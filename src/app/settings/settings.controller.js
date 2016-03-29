'use strict';

angular.module('folioment')
  .controller('SettingsController', function () {
    var vm = this;

    vm.amount = 0.0;

    vm.percents = [{
      label: '10%',
      value: 0.10
    }, {
      label: '20%',
      value: 0.20
    }, {
      label: '30%',
      value: 0.30
    }, {
      label: '40%',
      value: 0.40
    }, {
      label: '50%',
      value: 0.50
    }, {
      label: '60%',
      value: 0.60
    }, {
      label: '70%',
      value: 0.70
    }, {
      label: '80%',
      value: 0.80
    }, {
      label: '90%',
      value: 0.90
    }, {
      label: '100%',
      value: 1.0
    }];

    vm.selected = vm.percents[0];


  });
