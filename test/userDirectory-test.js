import chai from 'chai';
const expect = chai.expect;
import {sampleTestData} from './sampleTestData';
import Manager from '../src/data-model/manager';
import User from '../src/data-model/user';
import UserDirectory from '../src/data-model/userDirectory';

describe.only('UserDirectory', () => {
  let userDirectory;
  beforeEach(() => {
    userDirectory = new UserDirectory(sampleTestData.userData, sampleTestData.mappedBookingData);
  });

  describe('Constructor', () => {
    it('should be a function', () => {
      expect(UserDirectory).to.be.a('function');
    });

    it('should create an instance of UserDirectory', () => {
      expect(userDirectory).to.be.an.instanceof(UserDirectory);
    });

    it('should take in the user data', () => {
      expect(userDirectory.rawUserData).to.deep.equal(sampleTestData.userData)
    });

    it('should take in the booking data', () => {
      expect(userDirectory.bookingData).to.deep.equal(sampleTestData.mappedBookingData)
    });

    it('should not be instantiated with a current user', () => {
      expect(userDirectory.currentUser).to.deep.equal(null);
    });

    it('should have a guest list', () => {
      expect(userDirectory.guestList).to.deep.equal([]);
    });
  });

  describe('Methods', () => {
    beforeEach(() => {
      userDirectory.createGuestList()
    })

    it('should put Guests in the guest list', () => {
      expect(userDirectory.guestList[0].id).to.deep.equal(3);
      expect(userDirectory.guestList[1].id).to.deep.equal(1);
      expect(userDirectory.guestList[2].id).to.deep.equal(2);
      expect(userDirectory.guestList[3].id).to.deep.equal(4);
    });

    it('should be able to find a guest with an id', () => {
      const result = userDirectory.findGuest(2);
      expect(result.name).to.deep.equal("James Sullivan");
    });

    it('should choose a user type when given a username and password', () => {
      userDirectory.chooseUser('manager', 'overlook2020');
      expect(userDirectory.currentUser).to.be.an.instanceof(Manager);

      userDirectory.chooseUser('customer1', 'overlook2020');
      expect(userDirectory.currentUser).to.be.an.instanceof(User);
      expect(userDirectory.currentUser.name).to.deep.equal("Mike Wazoski");
    });

    it('should return an error when given an incorrect password', () => {
      const result = userDirectory.chooseUser('manager', 'password123');

      expect(result).to.deep.equal(false);
    });

    it('should return an error when the userID does not exist', () => {
      const result = userDirectory.chooseUser('customer200', 'overlook2020');

      expect(result).to.deep.equal(false);
    });

    it('should filter booking data for guests', () => {
      userDirectory.chooseUser('customer3', 'overlook2020');
      const result = userDirectory.currentUser.bookingService.bookingHistory[0].id

      expect(result).to.deep.equal("9s72kfncs86grssap");
    });

    it('should be able to search guests by name', () => {
      const result = userDirectory.searchGuests("Mike");
      expect(result[0].name).to.deep.equal("mike wazoski");

      const result2 = userDirectory.searchGuests("Bo");
      expect(result2.length).to.deep.equal(2);
      expect(result2[1].name).to.deep.equal("boo");
    });
  });
});
