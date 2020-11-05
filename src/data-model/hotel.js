import RoomRecord from './roomRecord';
import BookingRecord from './bookingRecord';
import UserDirectory from './userDirectory';

export default class Hotel {
  constructor(userData, roomData, bookingData) {
    this.userDirectory = new UserDirectory(userData, bookingData),
    this.roomRecord = new RoomRecord(roomData),
    this.bookingRecord = new BookingRecord(bookingData)
  }

  launch(username, password) {
    this.userDirectory.chooseUser(username, password);
    this.bookingRecord.createBookingHistory();
    this.roomRecord.createRoomRecord();
  }

  calculateTotalRoomRevenue(date) {
    let totalRevenue = 0;
    let bookedRoomsByDate = this.bookingRecord.bookingHistory.reduce((bookedRoomNumbers, booking) => {
      if (booking.date === date) {
        bookedRoomNumbers.push(booking.roomNumber);
      }
      return bookedRoomNumbers
    }, [])

    bookedRoomsByDate.forEach(bookedRoom => {
      this.roomRecord.roomRecord.forEach(room => {
        if (bookedRoom === room.number) {
          totalRevenue = totalRevenue += room.costPerNight;
        }
      })
    })
    
    return totalRevenue;
  }

  returnAvailableRooms(date) {
    return this.roomRecord.roomRecord.reduce((acc, room) => {
      let bookedRooms = this.bookingRecord.bookingHistory.forEach(booking => {
        if (room.number === booking.roomNumber) {
          acc.push(room)
        }
      })
      console.log(acc)
      return acc
    }, [])
  }
}
