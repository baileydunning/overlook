import chai from 'chai';
const expect = chai.expect;
import {sampleTestData} from './sampleTestData.js'
import BookingService from '../src/data-model/bookingService';
import UserDirectory from '../src/data-model/userDirectory';
import Hotel from '../src/data-model/hotel';

describe('Hotel', () => {
  let hotel;
  beforeEach(() => {
    hotel = new Hotel(sampleTestData.userData, sampleTestData.roomData, sampleTestData.bookingData)
  });

  describe('Constructor', () => {
    it('should be a function', () => {
      expect(Hotel).to.be.a('function');
    });

    it('should create an instance of Hotel', () => {
      expect(hotel).to.be.an.instanceof(Hotel);
    });

    it('should have a booking service', () => {
      expect(hotel.bookingService).to.be.an.instanceof(BookingService);
    });

    it('should have a user directory', () => {
      expect(hotel.userDirectory).to.be.an.instanceof(UserDirectory);
    });
  });

  describe('Methods', () => {
    beforeEach(() => {
      hotel.launch("manager", "overlook2020")
    });

    it('should calculate the total room revenue by date', () => {
      const result = hotel.calculateTotalRoomRevenue("2020/11/03");

      expect(result).to.deep.equal(475);
    });

    it('should show available rooms for a given day', () => {
      hotel.returnTodayBookings("2020/11/03");

      expect(hotel.availableRoomsToday.length).to.deep.equal(2);

      hotel.returnTodayBookings("2020/10/31");

      expect(hotel.availableRoomsToday[0].roomType).to.deep.equal("residential suite");
    });

    it('should calculate the percentage of rooms booked', () => {
      hotel.returnTodayBookings("2020/10/31");

      expect(hotel.percentRoomsBooked).to.deep.equal("25%");
    });
  });
});
