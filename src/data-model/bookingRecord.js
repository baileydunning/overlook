import Booking from './booking'

export default class BookingRecord {
  constructor(bookingData) {
    this.rawBookingData = bookingData,
    this.bookingRecord = []
    this.currentBookings = []
    this.previousBookings = []
  }

  createBookingsRecord() {

  }
}
