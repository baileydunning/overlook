import chai from 'chai';
const expect = chai.expect;
import {sampleTestData} from './sampleTestData'
import Room from '../src/data-model/room'
import BookingService from '../src/data-model/bookingService';
import UserDirectory from '../src/data-model/userDirectory';
import Hotel from '../src/data-model/hotel';

describe('Hotel', () => {
  let hotel;
  let today = new Date("2020/11/03").toLocaleDateString();
  beforeEach(() => {
    hotel = new Hotel(sampleTestData.userData, sampleTestData.roomData, sampleTestData.bookingData, today)
  });

  describe('Constructor', () => {
    it('should be a function', () => {
      expect(Hotel).to.be.a('function');
    });

    it('should create an instance of Hotel', () => {
      expect(hotel).to.be.an.instanceof(Hotel);
    });

    it('should take in the room data', () => {
      expect(hotel.rawRoomData).to.deep.equal(sampleTestData.roomData)
    });
  });

  describe('Methods', () => {
    beforeEach(() => {
      hotel.launch()
    });

    it('should have a user directory', () => {
      expect(hotel.userDirectory).to.be.an.instanceof(UserDirectory);
    });

    it('should put Rooms in the rooms array', () => {
      expect(hotel.rooms[0]).to.be.an.instanceof(Room);
    });

    it('should calculate the total room revenue by date', () => {
      const result = hotel.calculateTotalRoomRevenue();

      expect(result).to.deep.equal(475);
    });

    it('should show available rooms for a given day', () => {
      expect(hotel.availableRoomsToday.length).to.deep.equal(2);

      hotel.date = new Date("2020/10/31").toLocaleDateString()
      hotel.returnTodayBookings();
      expect(hotel.availableRoomsToday[0].roomType).to.deep.equal("residential suite");
    });

    it('should calculate the percentage of rooms booked', () => {
      expect(hotel.percentRoomsBooked).to.deep.equal("50%");
    });
  });
});
