(function () {
  'use strict';

  angular
      .module('frontend')
      .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'app/main/main.html',
          controller: 'MainController', controllerAs: 'vm'
        });
  }

})();
