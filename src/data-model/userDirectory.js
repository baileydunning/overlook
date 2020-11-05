import User from './user';
import Manager from './manager';

export default class UserDirectory {
  constructor(userData, bookingData) {
    this.currentUser = null,
    this.rawUserData = userData,
    this.rawBookingData = bookingData,
    this.guestList = []
  }

  chooseUser(username, password) {
    if (this.validatePassword(password) === true) {
      if (username.toLowerCase() === 'manager') {
        this.currentUser = new Manager({id: 0, name: 'manager'}, this.rawBookingData);
      } else if (username.includes('customer')) {
        return this.loginGuest(username);
      }
    } else {
      return 'Incorrect password, please try again.'
    }
  }

  loginGuest(username) {
    let userID = parseInt(username.replace('customer', '').replace(/ /g, ""));
    if (this.validateUser(userID) === true) {
      let foundUser = this.findGuest(userID)
      const userBookingData = this.rawBookingData.filter(booking => {
        return booking.userID === foundUser.id
      })
      this.currentUser = new User(foundUser, userBookingData);
    } else {
      return 'Sorry, this user does not exist.'
    }
  }

  validateUser(id) {
    return (this.findGuest(id) !== undefined) ? true : false;
  }

  validatePassword(password) {
    return (password === 'overlook2020') ? true : false;
  }

  createGuestList() {
    this.guestList = this.rawUserData.reduce((acc, user) => {
      if (user !== undefined) {
        acc.push(new User(user));
      }
      return acc
    }, []);
  }

  findGuest(userID) {
    return this.guestList.find(guest => {
      return guest.id === userID;
    })
  }

  searchGuests(input) {
    return this.guestList.filter(guest => {
      return guest.name.includes(input)
    })
  }
}
