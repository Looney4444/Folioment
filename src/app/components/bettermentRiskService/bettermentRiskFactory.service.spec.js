'use strict';

describe('Service: bettermentRiskService', function () {

  // load the service's module
  beforeEach(module('foliomentApp'));

  // instantiate service
  var bettermentRiskService;
  beforeEach(inject(function (_bettermentRiskService_) {
    bettermentRiskService = _bettermentRiskService_;
  }));

  it('should do something', function () {
    expect(!!bettermentRiskService).toBe(true);
  });

});
