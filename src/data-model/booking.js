export default class Booking {
  constructor(booking) {
    this.id = booking.id,
    this.userID = booking.userID,
    this.date = booking.date,
    this.roomNumber = booking.roomNumber,
    this.cost = booking.cost || null,
    this.roomNumber = booking.roomNumber || null,
    this.roomServiceCharges = []
  }
}
