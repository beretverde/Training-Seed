'use strict';

describe('Controller: SearchsimpleCtrl', function () {

  // load the controller's module
  beforeEach(module('trainingSeedApp'));

  var SearchsimpleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SearchsimpleCtrl = $controller('SearchsimpleCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SearchsimpleCtrl.awesomeThings.length).toBe(3);
  });
});
