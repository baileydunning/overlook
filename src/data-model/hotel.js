import RoomRecord from './roomRecord';
import GuestDirectory from './guestDirectory';

export default class Hotel {
  constructor(roomData, userData) {
    this.user = null,
    this.roomRecord = new RoomRecord(roomData),
    this.guestDirectory = new GuestDirectory(userData)
  }
}
