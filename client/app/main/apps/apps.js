'use strict';

angular.module('sinanmbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('apps', {
        url: '/apps',
        templateUrl: 'app/main/apps/apps.html',
        controller: 'AppsCtrl'
      });
  });
