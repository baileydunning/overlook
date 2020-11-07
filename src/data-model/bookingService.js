// import ApiCall from '../src/ApiCall'
import Booking from './booking';
import Room from './room';

export default class BookingService {
  constructor(bookingData, roomData) {
    this.rawBookingData = bookingData,
    this.rawRoomData = roomData,
    this.roomRecord = [],
    this.bookingHistory = [],
    this.currentBookings = [],
    this.previousBookings = []
  }

  createBookingHistory() {
    this.bookingHistory = this.rawBookingData.reduce((acc, booking) => {
      acc.push(new Booking(booking));
      return acc
    }, []);
  }

  createRoomRecord() {
    this.roomRecord = this.rawRoomData.reduce((acc, room) => {
      acc.push(new Room(room));
      return acc
    }, []);
  }

  sortBookingsByDate(today) {
    today = new Date(today);
    this.currentBookings = [];
    this.previousBookings = [];
    return this.bookingHistory.forEach(booking => {
      booking.date = new Date(booking.date);
      if (booking.date >= today) {
        this.currentBookings.push(booking);
      } else {
        this.previousBookings.push(booking)
      }
    })
  }
}
