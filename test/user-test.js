import chai from 'chai';
const expect = chai.expect;
import {sampleTestData} from './sampleTestData.js'
import User from '../src/data-model/user';

describe('User', () => {
  let user;
  beforeEach(() => {
    user = new User(sampleTestData.userData[2])
  });

  describe('Constructor', () => {
    it('should be a function', () => {
      expect(User).to.be.a('function');
    });

    it('should create an instance of User', () => {
      expect(user).to.be.an.instanceof(User);
    });

    it('should have an id', () => {
      expect(user.id).to.deep.equal(3);
    })

    it('should have a name', () => {
      expect(user.name).to.deep.equal("Randall Boggs");
    });
  });
});
