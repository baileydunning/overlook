import BookingRecord from './bookingRecord'

export default class User {
  constructor(userData, bookingData) {
    this.id = userData.id,
    this.name = userData.name,
    this.bookingRecord = new BookingRecord(bookingData)
	}

  addBooking() {

  }

  deleteBooking() {
    
  }
}
