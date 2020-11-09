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

  formatDate(today) {
    today = new Date(today),
    month = '' + (today.getMonth() + 1),
    day = '' + today.getDate(),
    year = today.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  sortBookingsByDate(today) {
    today = new Date(today);
    this.currentBookings = [];
    this.previousBookings = [];
    this.bookingHistory.forEach(booking => {
      booking.date = new Date(booking.date);
      if (booking.date >= today) {
        this.currentBookings.push(booking);
      } else {
        this.previousBookings.push(booking)
      }
    })
    this.organizeBookings();
  }

  organizeBookings() {
    this.currentBookings.sort((bookingA, bookingB) => {
      return bookingA.date > bookingB.date ? -1 : 1;
    })
    this.previousBookings.sort((bookingA, bookingB) => {
      return bookingA.date > bookingB.date ? -1 : 1;
    })
  }
}
