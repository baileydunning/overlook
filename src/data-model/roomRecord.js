import Room from './room'

export default class RoomRecord {
  constructor(roomData) {
    this.rawRoomData = roomData,
    this.roomRecord = []
  }

  createRoomRecord() {
    this.roomRecord = this.rawRoomData.reduce((acc, room) => {
      acc.push(new Room(room));
      return acc
    }, []);
  }

  showAvailableRooms(date) {

  }
}
