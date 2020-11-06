import RoomRecord from './roomRecord';
import BookingRecord from './bookingRecord';
import UserDirectory from './userDirectory';

export default class Hotel {
  constructor(userData, roomData, bookingData) {
    this.userDirectory = new UserDirectory(userData, bookingData),
    this.roomRecord = new RoomRecord(roomData),
    this.bookingRecord = new BookingRecord(bookingData),
    this.bookedRoomsToday = [],
    this.availableRoomsToday = [],
    this.percentRoomsBooked = 0
  }

  launch() {
    this.bookingRecord.createBookingHistory();
    this.roomRecord.createRoomRecord();
  }

  returnTodayBookings(date) {
    const todayBookings = this.bookingRecord.bookingHistory.reduce((acc, booking) => {
      if (booking.date === date) {
        acc.push(booking);
      }
      return acc;
    }, []);
    this.returnAvailableRooms(todayBookings);
    this.bookedRoomsToday = todayBookings.map(booking => {
      const roomBooked = this.roomRecord.roomRecord.find(room => {
        return room.number === booking.roomNumber
      });
      return booking = {bookingInfo: {booking}, roomInfo: {roomBooked}}
    });
  }

  returnAvailableRooms(todayBookings) {
    const bookedRoomNumbers = todayBookings.map(bookedRoom => {
      return bookedRoom = bookedRoom.roomNumber;
    })

    this.availableRoomsToday = this.roomRecord.roomRecord.filter(room => {
      return !bookedRoomNumbers.includes(room.number)
    })

    this.percentRoomsBooked = `${((this.roomRecord.roomRecord.length - this.availableRoomsToday.length) / this.roomRecord.roomRecord.length) * 100}%`;
  }

  calculateTotalRoomRevenue(date) {
    const bookedRoomNums = this.bookingRecord.bookingHistory.reduce((bookedRoomNumbers, booking) => {
        if (booking.date === date) {
          bookedRoomNumbers.push(booking.roomNumber);
        }
        return bookedRoomNumbers
      }, [])

    return bookedRoomNums.reduce((totalRevenue, bookedRoom) => {
      this.roomRecord.roomRecord.forEach(room => {
        if (bookedRoom === room.number) {
          totalRevenue = totalRevenue += room.costPerNight;
        }
      })
      return totalRevenue;
    }, 0)
  }
}
