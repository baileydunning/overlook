import BookingService from './bookingService';
import UserDirectory from './userDirectory';

export default class Hotel {
  constructor(userData, roomData, bookingData) {
    this.userDirectory = new UserDirectory(userData, bookingData),
    this.bookingService = new BookingService(bookingData, roomData),
    this.bookedRoomsToday = [],
    this.availableRoomsToday = [],
    this.percentRoomsBooked = 0
  }

  launch() {
    this.userDirectory.createGuestList();
    this.bookingService.createBookingHistory();
    this.bookingService.createRoomRecord();
  }

  returnTodayBookings(date) {
    date = new Date(date).toLocaleDateString()
    const todayBookings = this.bookingService.bookingHistory.reduce((acc, booking) => {
      booking.date = new Date(booking.date).toLocaleDateString()
      if (booking.date === date) {
        acc.push(booking);
      }
      return acc;
    }, []);
    this.returnAvailableRooms(todayBookings);
    this.bookedRoomsToday = todayBookings.map(booking => {
      const roomBooked = this.bookingService.roomRecord.find(room => {
        return room.number === booking.roomNumber
      });
      return booking = {bookingInfo: {booking}, roomInfo: {roomBooked}}
    });
  }

  returnAvailableRooms(todayBookings) {
    const bookedRoomNumbers = todayBookings.map(bookedRoom => {
      return bookedRoom = bookedRoom.roomNumber;
    })

    this.availableRoomsToday = this.bookingService.roomRecord.filter(room => {
      return !bookedRoomNumbers.includes(room.number)
    })

    this.percentRoomsBooked = `${((this.bookingService.roomRecord.length - this.availableRoomsToday.length) / this.bookingService.roomRecord.length) * 100}%`;
  }

  calculateTotalRoomRevenue(date) {
    const bookedRoomNums = this.bookingService.bookingHistory.reduce((bookedRoomNumbers, booking) => {
        if (booking.date === date) {
          bookedRoomNumbers.push(booking.roomNumber);
        }
        return bookedRoomNumbers
      }, [])

    return bookedRoomNums.reduce((totalRevenue, bookedRoom) => {
      this.bookingService.roomRecord.forEach(room => {
        if (bookedRoom === room.number) {
          totalRevenue = totalRevenue += room.costPerNight;
        }
      })
      return totalRevenue;
    }, 0)
  }
}
