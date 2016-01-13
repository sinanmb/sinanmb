'use strict';

angular.module('sinanmbApp')
  .controller('GithubbranchgeneratorCtrl', function ($scope) {

    $scope.branchTypes = [
      '', 'feature', 'release', 'patch', 'hotfix'
    ];

  });
