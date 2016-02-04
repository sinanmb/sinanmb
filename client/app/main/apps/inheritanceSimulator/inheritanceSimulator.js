'use strict';

angular.module('sinanmbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('inheritanceSimulator', {
        url: '/apps/inheritanceSimulator',
        templateUrl: 'app/main/apps/inheritanceSimulator/inheritanceSimulator.html',
        controller: 'InheritancesimulatorCtrl'
      });
  });