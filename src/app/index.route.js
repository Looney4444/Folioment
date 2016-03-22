(function() {
  'use strict';

  angular
    .module('folioment')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('marketData', {
        url: '/marketData',
        templateUrl: 'app/marketData/marketData.html',
        controller: 'MarketDataController',
        controllerAs: 'marketData'
      })
      .state('myPortfolio', {
        url: '/myPortfolio',
        templateUrl: 'app/myPortfolio/myPortfolio.html',
        controller: 'MyPortfolioController',
        controllerAs: 'myPortfolio'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/settings/settings.html'
      })
      .state('about', {
      url: '/about',
      templateUrl: 'app/about/about.html',
      controller: 'AboutController',
      controllerAs: 'about'
    });

    $urlRouterProvider.otherwise('/');
  }

})();
