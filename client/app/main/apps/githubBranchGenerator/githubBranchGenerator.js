'use strict';

angular.module('sinanmbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('githubBranchGenerator', {
        url: '/apps/githubBranchGenerator',
        templateUrl: 'app/main/apps/githubBranchGenerator/githubBranchGenerator.html',
        controller: 'GithubbranchgeneratorCtrl'
      });
  });