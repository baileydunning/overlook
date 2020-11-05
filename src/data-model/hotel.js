import RoomRecord from './roomRecord';
import UserDirectory from './userDirectory';

export default class Hotel {
  constructor(roomData, userData) {
    this.user = null,
    this.roomRecord = new RoomRecord(roomData),
    this.guestDirectory = new GuestDirectory(userData)
  }
}
