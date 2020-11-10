import chai from 'chai';
const expect = chai.expect;
import {sampleTestData} from './sampleTestData.js'
import Booking from '../src/data-model/booking';
import BookingService from '../src/data-model/bookingService';

describe('BookingService', () => {
  let bookingService;
  beforeEach(() => {
    bookingService = new BookingService(sampleTestData.mappedBookingData)
  });

  describe('Constructor', () => {
    it('should be a function', () => {
      expect(BookingService).to.be.a('function');
    });

    it('should create an instance of BookingService', () => {
      expect(bookingService).to.be.an.instanceof(BookingService);
    });

    it('should take in the booking data', () => {
      expect(bookingService.bookingData).to.deep.equal(sampleTestData.mappedBookingData)
    });

  });

  describe('Methods', () => {
    beforeEach(() => {
      bookingService.createBookingHistory();
    });
    it('should put Bookings in the booking history', () => {
      expect(bookingService.bookingHistory[0]).to.be.an.instanceof(Booking);
    });

    it('should sort previous and current bookings', () => {
      bookingService.sortBookingsByDate("11/06/2020");

      expect(bookingService.currentBookings.length).to.deep.equal(1);
      expect(bookingService.previousBookings.length).to.deep.equal(3);
    });
  });
});
