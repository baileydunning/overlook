import Booking from './booking';

export default class BookingService {
  constructor(bookingData) {
    this.bookingData = bookingData,
    this.bookingHistory = [],
    this.currentBookings = [],
    this.previousBookings = []
  }

  createBookingHistory() {
    this.bookingHistory = this.bookingData.reduce((allBookings, booking) => {
      allBookings.push(new Booking(booking));
      return allBookings
    }, []);
  }

  sortBookingsByDate(today) {
    today = new Date(today);
    this.currentBookings = [];
    this.previousBookings = [];
    this.bookingHistory.forEach(booking => {
      booking.date = new Date(booking.date);
      if (booking.date >= today) {
        booking.status = 'current';
        this.currentBookings.push(booking);
      } else {
        booking.status = 'previous';
        this.previousBookings.push(booking)
      }
    })
    this.organizeBookings();
  }

  organizeBookings() {
    this.bookingHistory.sort((bookingA, bookingB) => {
      return bookingA.date > bookingB.date ? -1 : 1;
    })
    this.currentBookings.sort((bookingA, bookingB) => {
      return bookingA.date > bookingB.date ? -1 : 1;
    })
    this.previousBookings.sort((bookingA, bookingB) => {
      return bookingA.date > bookingB.date ? -1 : 1;
    })
  }

  filterBookingsByID(idInput) {
    return this.bookingHistory.filter(booking => {
      return booking.userID === idInput;
    })
  }
}
