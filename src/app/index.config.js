(function() {
  'use strict';

  angular
    .module('folioment')
    .config(config);


  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
