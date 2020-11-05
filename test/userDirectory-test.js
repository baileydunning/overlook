import chai from 'chai';
const expect = chai.expect;
import {sampleTestData} from './sampleTestData';
import Manager from '../src/data-model/manager';
import User from '../src/data-model/user';
import UserDirectory from '../src/data-model/userDirectory';

describe('UserDirectory', () => {
  let userDirectory;
  beforeEach(() => {
    userDirectory = new UserDirectory(sampleTestData.userData);
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
      expect(userDirectory.guestList[0]).to.be.an.instanceof(User);
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
  });
});
