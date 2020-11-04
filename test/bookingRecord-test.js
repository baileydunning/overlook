import chai from 'chai';
const expect = chai.expect;
import Booking from '../src/data-model/booking';
import BookingRecord from '../src/data-model/bookingRecord';

describe('BookingRecord', () => {
  let bookingRecord;
  beforeEach(() => {
    bookingRecord = new BookingRecord()
  })

  describe('Constructor', () => {
    it('should be a function', () => {
      expect(BookingRecord).to.be.a('function');
    });
});
