import BookingService from './bookingService'

export default class User {
  constructor(userData, bookingData, roomData) {
    this.id = userData.id,
    this.name = userData.name,
    this.bookingService = new BookingService(bookingData, roomData)
	}

  addBooking() {

  }

  deleteBooking() {

  }
}
