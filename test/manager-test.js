import chai from 'chai';
const expect = chai.expect;
import {sampleTestData} from './sampleTestData'
import User from '../src/data-model/user';
import Manager from '../src/data-model/manager';

describe('Manager', () => {
  let manager;
  beforeEach(() => {
    manager = new Manager({id: 0, name: "Manager"}, sampleTestData.mappedBookingData)
  });

  describe('Constructor', () => {
    it('should be a function', () => {
      expect(Manager).to.be.a('function');
    });

    it('should create an instance of Manager', () => {
      expect(manager).to.be.an.instanceof(Manager);
      expect(manager).to.be.an.instanceof(User);
    });

    it('should have an id', () => {
      expect(manager.id).to.deep.equal(0);
    });

    it('should have a name', () => {
      expect(manager.name).to.deep.equal("Manager");
    });
  });
});
