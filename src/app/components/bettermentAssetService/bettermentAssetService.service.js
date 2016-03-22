'use strict';

angular.module('folioment')
  .service('bettermentAssetService', function () {
    this.getAsset = function(assetName){
      return assetName;
    };
  });
