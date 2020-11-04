import chai from 'chai';
const expect = chai.expect;
import {sampleTestData} from './sampleTestData.js'
import Booking from '../src/data-model/booking';
import BookingRecord from '../src/data-model/bookingRecord';

describe('BookingRecord', () => {
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
    beforeEach(() => {
      bookingRecord.createBookingsRecord();
    });

    it('should put Bookings in the booking record', () => {
      expect(bookingRecord.bookingRecord[0]).to.be.an.instanceof(Booking);
    });
  });
});
