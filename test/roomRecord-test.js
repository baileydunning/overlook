import chai from 'chai';
const expect = chai.expect;
import {sampleTestData} from './sampleTestData.js'
import Room from '../src/data-model/room';
import RoomRecord from '../src/data-model/roomRecord';

describe.only('RoomRecord', () => {
  let roomRecord;
  beforeEach(() => {
    roomRecord = new RoomRecord(sampleTestData.roomData)
  });

  describe('Constructor', () => {
    it('should be a function', () => {
      expect(RoomRecord).to.be.a('function');
    });

    it('should create an instance of RoomRecord', () => {
      expect(roomRecord).to.be.an.instanceof(RoomRecord);
    });

    it('should take in the room data', () => {
      expect(roomRecord.rawRoomData).to.deep.equal(sampleTestData.roomData)
    });
  });

  describe('Methods', () => {
    beforeEach(() => {
      roomRecord.createRoomRecord();
    });

    it('should put Rooms in the room record', () => {
      expect(roomRecord.roomRecord[0]).to.be.an.instanceof(Room);
    });
  });
});
