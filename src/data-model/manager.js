import User from './user'

export default class Manager extends User {
  constructor(userData, bookingData) {
    super(userData, bookingData)
  }

  addBooking(userID, roomNumber, date, onSuccess) {
    let newBooking = {
      userID: userID,
      date: date,
      roomNumber: roomNumber
    }

    this.api.postRequest(newBooking, onSuccess);
  }
}
