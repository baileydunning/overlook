import chai from 'chai';
const expect = chai.expect;
import {sampleTestData} from './sampleTestData.js'
import Hotel from '../src/data-model/hotel';

describe.only('Hotel', () => {
  let hotel;
  beforeEach(() => {
    hotel = new Hotel()
  });

  describe('Constructor', () => {
    it('should be a function', () => {
      expect(Hotel).to.be.a('function');
    });

    it('should create an instance of Manager', () => {
      expect(hotel).to.be.an.instanceof(Hotel);
    });
  });
});
