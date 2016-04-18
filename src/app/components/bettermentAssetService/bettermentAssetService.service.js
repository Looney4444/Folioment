'use strict';

angular.module('folioment')
  .service('bettermentAssetService', function ($http) {
    this.getData = function() {
      //Example of a Facade design pattern
      return $http.get("../app/resources/asset-class.json");
    };
  });
