'use strict';

angular.module('folioment')
  .factory('bettermentRiskFactory', function (risk) {
    var factory = {};

    factory.risk = risk;

    factory.getAllocations = function() {
      return factory.risk;
    }

    factory.getExpectedReturn = function(){
      return factory.risk;
    }

    factory.getVolatility = function(){
      return factory.risk;
    }

    return factory;

  });
