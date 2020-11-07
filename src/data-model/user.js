import BookingService from './bookingService'

export default class User {
  constructor(userData, bookingData) {
    this.id = userData.id,
    this.name = userData.name,
    this.bookingService = new BookingService(bookingData)
	}

  addBooking() {

  }

  deleteBooking() {

  }
}
