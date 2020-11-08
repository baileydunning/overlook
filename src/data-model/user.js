import BookingService from './bookingService'

export default class User {
  constructor(userData, bookingData) {
    this.id = userData.id,
    this.name = userData.name,
    this.bookingService = new BookingService(bookingData)
	}

  returnTotalSpentOnRooms() {
    let totalSpentOnRooms = this.bookingService.bookingHistory.reduce((totalSpent, booking) => {
      totalSpent += booking.cost
      return totalSpent;
    }, 0)

    return totalSpentOnRooms.toFixed(2);
  }

  addBooking() {

  }

  deleteBooking() {

  }
}
