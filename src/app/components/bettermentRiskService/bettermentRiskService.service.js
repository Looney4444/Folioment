'use strict';

angular.module('folioment')
  .service('bettermentRiskService', function($http){
    this.getData = function() {
      //Example of a Facade design pattern
      return $http.get("../app/resources/data.json");
    };
  });
