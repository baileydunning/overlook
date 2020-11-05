import chai from 'chai';
const expect = chai.expect;
import {sampleTestData} from './sampleTestData.js'
import RoomRecord from '../src/data-model/roomRecord';
import UserDirectory from '../src/data-model/userDirectory';
import Hotel from '../src/data-model/hotel';

describe.only('Hotel', () => {
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

    it('should have a room record', () => {
      expect(hotel.roomRecord).to.be.an.instanceof(RoomRecord);
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

    it.skip('should show available rooms for a given day', () => {
      const result = hotel.returnAvailableRooms("2020/11/03");

      expect(result.length).to.deep.equal(1)
    })
  });
});
