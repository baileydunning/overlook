import chai from 'chai';
const expect = chai.expect;
import {sampleTestData} from './sampleTestData.js'
import Room from '../src/data-model/room';

describe.only('Room', () => {
  let room;
  beforeEach(() => {
    room = new Room(sampleTestData.roomData[0]);
  });

  describe('Constructor', () => {
    it('should be a function', () => {
      expect(Room).to.be.a('function');
    });

    it('should create an instance of Room', () => {
      expect(room).to.be.an.instanceof(Room);
    });

    it('should have a number', () => {

    });

    it('should have a type', () => {

    });

    it('should have a bidet (or not)', () => {

    });

    it('should have a bed size', () => {

    });

    it('should have a number of beds', () => {

    });

    it('should have a cost per night', () => {

    });
  })
});
