'use strict';

angular.module('sinanmbApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
      {
        'title': 'Home',
        'link': '/'
      },
      {
        'title': 'Apps',
        'link': '/apps'
      }
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function (route) {
      // We need to check only the top lovel route because of nested routing
      return '/'+$location.path().split('/')[1] === route;
    };
  });
