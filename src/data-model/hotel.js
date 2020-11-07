import Room from './room';
import BookingService from './bookingService';
import UserDirectory from './userDirectory';

export default class Hotel {
  constructor(userData, roomData, bookingData, date) {
    this.user = null,
    this.rawUserData = userData,
    this.rawBookingData = bookingData,
    this.rawRoomData = roomData,
    this.rooms = [],
    this.bookedRoomsToday = [],
    this.availableRoomsToday = [],
    this.percentRoomsBooked = 0,
    this.date = date
  }

  launch() {
    this.createRoomRecord();
    const updatedBookingData = this.updateBookings();
    this.userDirectory = new UserDirectory(this.rawUserData, updatedBookingData)
    this.bookingService = new BookingService(updatedBookingData)
    this.userDirectory.createGuestList();
    this.bookingService.createBookingHistory();
  }

  createRoomRecord() {
    this.rooms = this.rawRoomData.reduce((allRooms, room) => {
      allRooms.push(new Room(room));
      return allRooms
    }, []);
  }

  updateBookings() {
    return this.rawBookingData.map(booking => {
      this.rooms.forEach(room => {
        if (room.number === booking.roomNumber) {
          booking.cost = room.costPerNight
        }
      })
      return booking;
    })
  }

  returnTodayBookings() {
    const todayBookings = this.bookingService.bookingHistory.reduce((bookingsForDate, booking) => {
      booking.date = new Date(booking.date).toLocaleDateString()
      if (booking.date === this.date) {
        bookingsForDate.push(booking);
      }
      return bookingsForDate;
    }, []);
    this.returnAvailableRooms(todayBookings);
    this.bookedRoomsToday = todayBookings.map(booking => {
      const roomBooked = this.rooms.find(room => {
        return room.number === booking.roomNumber
      });
      return booking = {bookingInfo: {booking}, roomInfo: {roomBooked}}
    });
  }

  returnAvailableRooms(todayBookings) {
    const bookedRoomNumbers = todayBookings.map(bookedRoom => {
      return bookedRoom = bookedRoom.roomNumber;
    })

    this.availableRoomsToday = this.rooms.filter(room => {
      return !bookedRoomNumbers.includes(room.number)
    })

    this.percentRoomsBooked = `${((this.rooms.length - this.availableRoomsToday.length) / this.rooms.length) * 100}%`;
  }

  calculateTotalRoomRevenue(date) {
    const bookedRoomNums = this.bookingService.bookingHistory.reduce((bookedRoomNumbers, booking) => {
        if (booking.date === date) {
          bookedRoomNumbers.push(booking.roomNumber);
        }
        return bookedRoomNumbers
      }, [])

    return bookedRoomNums.reduce((totalRevenue, bookedRoom) => {
      this.rooms.forEach(room => {
        if (bookedRoom === room.number) {
          totalRevenue = totalRevenue += room.costPerNight;
        }
      })
      return totalRevenue;
    }, 0)
  }
}
