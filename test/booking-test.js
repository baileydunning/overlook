import chai from 'chai';
const expect = chai.expect;
import {sampleTestData} from './sampleTestData.js'
import Booking from '../src/data-model/booking';

describe('Booking', () => {
  let booking;
  beforeEach(() => {
    booking = new Booking(sampleTestData.bookingData[0])
  })

  describe('Constructor', () => {

    it('should be a function', () => {
      expect(Booking).to.be.a('function');
    });

    it('should create an instance of booking', () => {
      expect(booking).to.be.an.instanceof(Booking)
    });

    it('should have an id', () => {
      expect(booking.id).to.deep.equal("5fwrgu4i7k55hl6t5");
    });

    it('should have a user id', () => {
      expect(booking.userID).to.deep.equal(2);
    });

    it('should have a date', () => {
      expect(booking.date).to.deep.equal("Tue Nov 03 2020");
    });

    it('should have a room number', () => {
      expect(booking.roomNumber).to.deep.equal(11);
    });

    it('should be instantiated with no room service charges', () => {
      expect(booking.roomServiceCharges).to.deep.equal([]);
    });
  });
});
