(function () {
    'use strict';

    angular
        .module('frontend')
        .factory('Main', MainFactory);

    /** @ngInject */
    function MainFactory($resource ) {

        return $resource( 'http://localhost:8000/api' + '/blog');
    }
})();
