// import ApiCall from '../src/ApiCall'
import Booking from './booking';

export default class BookingRecord {
  constructor(bookingData) {
    // this.bookingService = new ApiCall('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', 'bookingData')
    this.rawBookingData = bookingData,
    this.bookingHistory = [],
    this.currentBookings = [],
    this.previousBookings = []
  }

  createBookingHistory() {
    this.bookingHistory = this.rawBookingData.reduce((acc, booking) => {
      booking.date = new Date(booking.date);
      acc.push(new Booking(booking));
      return acc
    }, []);
  }

  sortBookingsByDate() {
    this.currentBookings = [];
    this.previousBookings = [];
    return this.bookingHistory.forEach(booking => {
      if (booking.date >= today) {
        this.currentBookings.push(booking);
      } else {
        this.previousBookings.push(booking)
      }
    })
  }
}
