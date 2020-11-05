import chai from 'chai';
const expect = chai.expect;
import {sampleTestData} from './sampleTestData';
import Manager from '../src/data-model/manager';
import Guest from '../src/data-model/guest';
import UserDirectory from '../src/data-model/userDirectory';

describe.only('UserDirectory', () => {
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

    it('should have a guest list', () => {
      expect(userDirectory.guestList).to.deep.equal([]);
    });
  });

  describe('Methods', () => {
    beforeEach(() => {
      userDirectory.createGuestList();
    });

    it('should put Guests in the guest list', () => {
      expect(userDirectory.guestList[0]).to.be.an.instanceof(Guest);
    });
  });
});
