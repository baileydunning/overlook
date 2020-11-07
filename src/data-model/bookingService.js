import Booking from './booking';

export default class BookingService {
  constructor(bookingData) {
    this.rawBookingData = bookingData,
    this.bookingHistory = [],
    this.currentBookings = [],
    this.previousBookings = []
  }

  createBookingHistory() {
    this.bookingHistory = this.rawBookingData.reduce((allBookings, booking) => {
      allBookings.push(new Booking(booking));
      return allBookings
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
