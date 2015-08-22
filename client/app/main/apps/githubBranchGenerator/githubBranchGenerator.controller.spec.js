'use strict';

describe('Controller: GithubbranchgeneratorCtrl', function () {

  // load the controller's module
  beforeEach(module('sinanmbApp'));

  var GithubbranchgeneratorCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GithubbranchgeneratorCtrl = $controller('GithubbranchgeneratorCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
