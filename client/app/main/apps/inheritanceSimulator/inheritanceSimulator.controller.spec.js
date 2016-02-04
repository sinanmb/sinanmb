'use strict';

describe('Controller: InheritancesimulatorCtrl', function () {

  // load the controller's module
  beforeEach(module('sinanmbApp'));

  var InheritancesimulatorCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InheritancesimulatorCtrl = $controller('InheritancesimulatorCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
