import chai from 'chai';
const expect = chai.expect;
import {sampleTestData} from './sampleTestData.js'
import Booking from '../src/data-model/booking';
import BookingRecord from '../src/data-model/bookingRecord';

describe.only('BookingRecord', () => {
  let bookingRecord;
  beforeEach(() => {
    bookingRecord = new BookingRecord(sampleTestData.bookingData)
  });

  describe('Constructor', () => {
    it('should be a function', () => {
      expect(BookingRecord).to.be.a('function');
    });

    it('should create an instance of BookingRecord', () => {
      expect(bookingRecord).to.be.an.instanceof(BookingRecord);
    });

    it('should take in the booking data', () => {
      expect(bookingRecord.rawBookingData).to.deep.equal(sampleTestData.bookingData)
    });
  });

  describe('Methods', () => {
    it('should put Bookings in the booking history', () => {
      bookingRecord.createBookingHistory();
      expect(bookingRecord.bookingHistory[0]).to.be.an.instanceof(Booking);
    });

    it('should sort previous and current bookings', () => {
      bookingRecord.createBookingHistory();
      bookingRecord.sortBookingsByDate();

      expect(bookingRecord.currentBookings.length).to.deep.equal(0);
      expect(bookingRecord.previousBookings.length).to.deep.equal(3);
    })
  });
});
