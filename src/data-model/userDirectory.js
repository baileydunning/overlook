import User from './user';
import Manager from './manager';

export default class UserDirectory {
  constructor(userData, bookingData) {
    this.currentUser = null,
    this.rawUserData = userData,
    this.rawBookingData = bookingData,
    this.guestList = []
  }

  createGuestList() {
    this.guestList = this.rawUserData.reduce((acc, user) => {
      if (user !== undefined) {
        let userBookingData = this.filterBookingData(user.id)
        acc.push(new User(user, userBookingData));
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
    input = input.toLowerCase();
    return this.guestList.filter(guest => {
      guest.name = guest.name.toLowerCase();
      return guest.name.includes(input)
    })
  }

  filterBookingData(id) {
    return this.rawBookingData.filter(booking => {
      return booking.userID === id
    })
  }

  validateUser(id) {
    return (this.findGuest(id) !== undefined) ? true : false;
  }

  validatePassword(password) {
    return (password === 'overlook2020') ? true : false;
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
      let foundUser = this.findGuest(userID);
      let userBookingData = this.filterBookingData(userID);
      this.currentUser = new User(foundUser, userBookingData);
    } else {
      return 'Sorry, this user does not exist.'
    }
  }
}
