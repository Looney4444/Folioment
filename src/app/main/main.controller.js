(function() {
  'use strict';

  angular
    .module('folioment')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;
    vm.text = "test";

  }
})();
