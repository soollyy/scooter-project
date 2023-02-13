const Scooter = require('../src/Scooter');
const User = require('../src/User');

describe('scooter object', function() {
  test('has all properties', function() {
    const station = 'Station 1';
    const scooter = new Scooter(station);
    expect(scooter.station).toBe(station);
    expect(scooter.user).toBe(null);
    expect(scooter.serial).toBeGreaterThan(0);
    expect(scooter.charge).toBe(100);
    expect(scooter.isBroken).toBe(false);
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
    expect(scooter.user).toBe('User 1');
    expect(scooter.station).toBe(null);
  });

  test('dock method', function() {
    scooter.recharge();
    scooter.rent();
    scooter.dock('Station 2');
    expect(scooter.user).toBe(null);
    expect(scooter.station).toBe('Station 2');
  });

  test('recharge method', function() {
    scooter.recharge();
    scooter.charge = 20;
    expect(scooter.charge).toBe(100);
  });

  test('requestRepair method', function(done) {
    scooter.isBroken = true;
    scooter.requestRepair();
    setTimeout(() => {
      expect(scooter.isBroken).toBe(false);
      done();
    }, 5100);
  });
});


