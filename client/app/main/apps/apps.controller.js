'use strict';

angular.module('sinanmbApp')
  .controller('AppsCtrl', function ($scope) {
    $scope.apps = [
      {
        name: 'GitHub Branch Generator',
        link: '/apps/githubBranchGenerator',
        info: 'This app generates the commands to enter in the CLI to generate local branches that are synced with upstream and origin repos. ' +
        'Allows to save time when working with a Github repo set with pull-requests'
      },
      {
        name: 'Inheritance Simulator',
        link: '/apps/inheritanceSimulator',
        info: 'This app divides assets in respect to everyone\'s shares'
      }
    ];
  });
