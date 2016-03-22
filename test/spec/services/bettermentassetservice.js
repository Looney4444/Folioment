'use strict';

describe('Service: bettermentAssetService', function () {

  // load the service's module
  beforeEach(module('foliomentApp'));

  // instantiate service
  var bettermentAssetService;
  beforeEach(inject(function (_bettermentAssetService_) {
    bettermentAssetService = _bettermentAssetService_;
  }));

  it('should do something', function () {
    expect(!!bettermentAssetService).toBe(true);
  });

});
