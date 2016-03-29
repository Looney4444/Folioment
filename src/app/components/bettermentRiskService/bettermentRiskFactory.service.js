'use strict';

angular.module('folioment')
  .factory('bettermentRiskFactory', function($http){
    var bettermentRiskFactory = {};

    bettermentRiskFactory.getData = function() {
      return $http.get("../app/resources/data.json");
    };

    return bettermentRiskFactory;
});
