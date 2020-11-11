export default class Booking {
  constructor(booking) {
    this.id = booking.id,
    this.userID = parseInt(booking.userID),
    this.date = new Date(booking.date).toDateString(),
    this.roomNumber = parseInt(booking.roomNumber),
    this.cost = parseInt(booking.cost) || null,
    this.roomServiceCharges = []
  }
}
