import chai from 'chai';
const expect = chai.expect;
import {sampleTestData} from './sampleTestData'
import BookingService from '../src/data-model/bookingService'
import User from '../src/data-model/user';

describe('User', () => {
  let user;

  function filterBookingData(id) {
      return sampleTestData.mappedBookingData.filter(booking => {
        return booking.userID === id
      })
    }

  beforeEach(() => {
    let filteredBookingData = filterBookingData(1);
    user = new User(sampleTestData.userData[0], filteredBookingData);
    user.bookingService.createBookingHistory();
    user.bookingService.sortBookingsByDate("11/03/2020");
  });

  describe('Constructor', () => {
    it('should be a function', () => {
      expect(User).to.be.a('function');
    });

    it('should create an instance of User', () => {
      expect(user).to.be.an.instanceof(User);
    });

    it('should have an id', () => {
      expect(user.id).to.deep.equal(1);
    })

    it('should have a name', () => {
      expect(user.name).to.deep.equal("Mike Wazoski");
    });

    it('should have a booking service', () => {
      expect(user.bookingService).to.be.an.instanceof(BookingService);
    });
  });

  describe('Methods', () => {
    it('should return the total spent on previous bookings', () => {
      const result = user.returnTotalSpentOnRooms();

      expect(result).to.deep.equal(550);
    });
  });
});
