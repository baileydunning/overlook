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
      expect(room.number).to.deep.equal(10);
    });

    it('should have a type', () => {
      expect(room.roomType).to.deep.equal("residential suite");
    });

    it('should have a bidet (or not)', () => {
      expect(room.bidet).to.deep.equal(true);
    });

    it('should have a bed size', () => {
      expect(room.bedSize).to.deep.equal("queen");
    });

    it('should have a number of beds', () => {
      expect(room.numBeds).to.deep.equal(3);
    });

    it('should have a cost per night', () => {
      expect(room.costPerNight).to.deep.equal(350);
    });
  })
});
