import User from './user';
import Manager from './manager';

export default class UserDirectory {
  constructor(userData, bookingData) {
    this.rawUserData = userData,
    this.rawBookingData = bookingData,
    this.currentUser = null,
    this.guestList = []
  }

  chooseUser(username, password) {
    if (username === 'manager' && password === 'overlook2020') {
      this.currentUser = new Manager({id: 0, name: 'Manager'}, this.rawBookingData);
    } else if (username.includes('customer') && password === 'overlook2020') {
      this.loginGuest(username);
    } else {
      alert('Sorry your username and/or password was incorrect. Please try again!')
    }
  }

  loginGuest(username) {
    let userID = username.replace('customer', '').replace(/ /g, "");
    let foundUser = this.findGuest(userID);
    const userBookingData = this.rawBookingData.filter(booking => {
      return booking.userID === foundUser.id
    })
    this.currentUser = new User(foundUser, userBookingData);
  }

  createGuestList() {
    this.guestList = this.rawUserData.reduce((acc, user) => {
      acc.push(user);
      return acc
    }, []);
  }

  findGuest(id) {
    return this.guestList.find(guest => {
      return guest.id == id;
    })
  }

  searchGuests(input) {

  }
}
