(function() {
  'use strict';

  angular
    .module('frontend')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, Main) {
    var vm = this;

    vm.post = {};

    vm.posts = [];
    vm.classAnimation = '';
    vm.showToastr = showToastr;
    vm.loading = false;

    vm.show = false;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Create a new post');
      vm.classAnimation = '';
      vm.show = true;
    }

    function getWebDevTec() {
      // vm.posts = webDevTec.getTec();
    }

    vm.submitForm = function(isValid) {
      // check to make sure the form is completely valid
      if (isValid) {
        vm.show = false;
        vm.loading = true;

        Main.save(vm.post, function (response) {
          vm.loading = false;
          return response;
        }).$promise.then(function (data) {
          if (data && data.msg === "done") {
            toastr.success('Posted!');
            vm.posts.push({'title': vm.post.title, 'url': vm.post.email, 'description': vm.post.content, 'logo': vm.post.image})

            vm.post = {};

          } else {
            toastr.error('Error!');
          }
            
        });
      }

    };
  }
})();
