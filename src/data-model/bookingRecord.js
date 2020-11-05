import Booking from './booking';

export default class BookingRecord {
  constructor(bookingData) {
    this.rawBookingData = bookingData,
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
}
