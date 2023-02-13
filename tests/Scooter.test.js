const Scooter = require('../src/Scooter');
const User = require('../src/User');

describe('scooter object', function() {
  test('has all properties', function() {
    const station = 'Station 1';
    const scooter = new Scooter(station);
    expect(scooter.station).toEqual(station);
    expect(scooter.user).toEqual(null);
    expect(scooter.serial).toBeGreaterThan(0);
    expect(scooter.charge).toEqual(100);
    expect(scooter.isBroken).toEqual(false);
  });
});

describe('scooter methods', function() {
  let scooter;

  beforeEach(() => {
    scooter = new Scooter('Station 1');
  });

  test('rent method', function() {
    scooter.recharge();
    scooter.rent();
    expect(scooter.user).toEqual('User 1');
    expect(scooter.station).toEqual(null);
  });

  test('dock method', function() {
    scooter.recharge();
    scooter.rent();
    scooter.dock('Station 2');
    expect(scooter.user).toEqual(null);
    expect(scooter.station).toEqual('Station 2');
  });

  test('recharge method', function() {
    scooter.recharge();
    scooter.charge = 20;
    expect(scooter.charge).toEqual(100);
  });

  test('requestRepair method', function(done) {
    scooter.isBroken = true;
    scooter.requestRepair();
    setTimeout(() => {
      expect(scooter.isBroken).toEqual(false);
      done();
    }, 5100);
  });
});


