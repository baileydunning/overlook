import BookingService from './bookingService';
import ApiCall from '../apiCall.js';

export default class User {
  constructor(userData, bookingData) {
    this.id = userData.id,
    this.name = userData.name,
    this.api = new ApiCall('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', 'bookings'),
    this.bookingService = new BookingService(bookingData),
    this.bookingService.createBookingHistory()
	}

  returnTotalSpentOnRooms() {
    let totalSpentOnRooms = this.bookingService.previousBookings.reduce((totalSpent, booking) => {
      totalSpent += booking.cost
      return totalSpent;
    }, 0)

    return totalSpentOnRooms.toFixed(2);
  }

  returnBill() {
    let totalBill = this.bookingService.currentBookings.reduce((totalDue, booking) => {
      totalDue += booking.cost
      return totalDue;
    }, 0)

    return totalBill.toFixed(2);
  }

  addBooking(roomNumber, date, onSuccess) {
    let newBooking = {
      userID: this.id,
      date: date,
      roomNumber: roomNumber
    }

    this.api.postRequest(newBooking, onSuccess);
  }
}
