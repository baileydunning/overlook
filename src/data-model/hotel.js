import Room from './room';
import UserDirectory from './userDirectory';

export default class Hotel {
  constructor(userData, roomData, bookingData, date) {
    this.date = new Date(date).toDateString(),
    this.user = null,
    this.rawUserData = userData,
    this.rawRoomData = roomData,
    this.rawBookingData = bookingData,
    this.rooms = [],
    this.bookedRoomsToday = [],
    this.availableRoomsToday = []
  }

  launch() {
    this.createRoomRecord();
    this.updateBookings();
    this.returnTodayBookings();
    this.userDirectory = new UserDirectory(this.rawUserData, this.rawBookingData)
    this.userDirectory.createGuestList();
  }

  createRoomRecord() {
    this.rooms = this.rawRoomData.reduce((allRooms, room) => {
      allRooms.push(new Room(room));
      return allRooms
    }, []);
  }

  updateBookings() {
    this.rawBookingData = this.rawBookingData.map(booking => {
      this.rooms.forEach(room => {
        if (room.number === booking.roomNumber) {
          booking.roomNumber = room.number;
          booking.cost = room.costPerNight;
          booking.date = new Date(booking.date).toDateString();
        }
      })
      return booking;
    })
  }

  returnTodayBookings() {
    const todayBookings = this.rawBookingData.reduce((bookingsForDate, booking) => {
      booking.date = new Date(booking.date).toDateString()
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

    this.percentRoomsBooked = parseInt(((this.rooms.length - this.availableRoomsToday.length) / this.rooms.length) * 100).toFixed(0);
  }

  calculateTotalRoomRevenue() {
    return this.bookedRoomsToday.reduce((totalRevenue, bookedRoom) => {
      if (bookedRoom.bookingInfo.booking.cost) {
        totalRevenue = totalRevenue += bookedRoom.bookingInfo.booking.cost;
      }
      return totalRevenue;
    }, 0)
  }

  filterByRoomType(input) {
    return this.availableRoomsToday.filter(room => {
      return room.roomType === input;
    })
  }
}
