import chai from 'chai';
const expect = chai.expect;
import {sampleTestData} from './sampleTestData.js'
import RoomRecord from '../src/data-model/roomRecord';
import UserDirectory from '../src/data-model/userDirectory';
import Hotel from '../src/data-model/hotel';

describe('Hotel', () => {
  let hotel;
  beforeEach(() => {
    hotel = new Hotel(sampleTestData.roomData, sampleTestData.userData, sampleTestData.bookingData)
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
});
