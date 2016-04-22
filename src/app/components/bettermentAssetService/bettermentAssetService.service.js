'use strict';

angular.module('folioment')
  .service('bettermentAssetService', function ($http) {
    this.getData = function() {
      //Example of a Facade design pattern
      return $http.get("../app/resources/asset-class.json");
    };
  });


angular.module('folioment')
  .factory('StockDataService', function($http) {
    var BASE = 'http://query.yahooapis.com/v1/public/yql';

    var StockDataFactory = function(stock) {
      this.stock = stock;
      this.profile = null;
    };

    StockDataFactory.prototype.getStockInfo = function() {
      var self = this;
      var query = encodeURIComponent ('select * from yahoo.finance.quotes where symbol in (\''+this.stock+'\')');
      var url = BASE + '?' + 'q=' + query + '&format=json&diagnostics=true&env=http://datatables.org/alltables.env';

      return $http.jsonp(url + '&callback=JSON_CALLBACK').then(function(response) {
        self.profile = response.data;
        return response;
      });
    };

    return StockDataFactory;
});

