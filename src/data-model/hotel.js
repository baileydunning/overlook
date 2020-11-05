import RoomRecord from './roomRecord';
import UserDirectory from './userDirectory';

export default class Hotel {
  constructor(userData, roomData, bookingData) {
    this.userDirectory = new UserDirectory(userData, bookingData),
    this.roomRecord = new RoomRecord(roomData)
  }
}
