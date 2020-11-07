import chai from 'chai';
const expect = chai.expect;
import {sampleTestData} from './sampleTestData.js'
import Room from '../src/data-model/room';
import Booking from '../src/data-model/booking';
import BookingService from '../src/data-model/bookingService';

describe('BookingService', () => {
  let bookingService;
  beforeEach(() => {
    bookingService = new BookingService(sampleTestData.bookingData, sampleTestData.roomData)
  });

  describe('Constructor', () => {
    it('should be a function', () => {
      expect(BookingService).to.be.a('function');
    });

    it('should create an instance of BookingService', () => {
      expect(bookingService).to.be.an.instanceof(BookingService);
    });

    it('should take in the booking data', () => {
      // expect(bookingService.rawBookingData).to.deep.equal(sampleTestData.bookingData)
    });

    it('should take in the room data', () => {
      // expect(bookingService.rawRoomData).to.deep.equal(sampleTestData.roomData)
    });
  });

  describe('Methods', () => {
    beforeEach(() => {
      bookingService.createBookingHistory();
      bookingService.createRoomRecord();
    });
    it('should put Bookings in the booking history', () => {
      expect(bookingService.bookingHistory[0]).to.be.an.instanceof(Booking);
    });

    it('should sort previous and current bookings', () => {
      bookingService.sortBookingsByDate("11/06/2020");

      expect(bookingService.currentBookings.length).to.deep.equal(1);
      expect(bookingService.previousBookings.length).to.deep.equal(3);
    });

    it('should put Rooms in the room record', () => {
      expect(bookingService.roomRecord[0]).to.be.an.instanceof(Room);
    });
  });
});
