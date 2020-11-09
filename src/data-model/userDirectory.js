import User from './user';
import Manager from './manager';

export default class UserDirectory {
  constructor(userData, bookingData) {
    this.currentUser = null,
    this.rawUserData = userData,
    this.bookingData = bookingData,
    this.guestList = []
  }

  createGuestList() {
    this.guestList = this.rawUserData.reduce((allGuests, user) => {
      if (user !== undefined) {
        let userBookingData = this.bookingData.filter(booking => {
          return booking.userID === user.id
        })
        allGuests.push(new User(user, userBookingData));
      }
      return allGuests
    }, []);
    this.alphabetizeGuests();
  }

  alphabetizeGuests() {
    this.guestList = this.guestList.sort((guestA, guestB) => {
      return guestA.name > guestB.name ? -1 : 1;
    })
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
    return this.bookingData.filter(booking => {
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
    username = username.toLowerCase();
    if (this.validatePassword(password) === true) {
      if (username === 'manager') {
        this.currentUser = new Manager({id: 0, name: 'Manager'}, this.bookingData);
        this.currentUser.type = 'manager';
        this.currentUser.bookingService.createBookingHistory();
        return 'manager';
      } else if (username.includes('customer')) {
        return this.loginGuest(username);
      }
    } else {
      return false;
    }
  }

  loginGuest(username) {
    let userID = parseInt(username.replace('customer', '').replace(/ /g, ""));
    if (this.validateUser(userID) === true) {
      let foundUser = this.findGuest(userID);
      let userBookingData = this.filterBookingData(userID);
      this.currentUser = new User(foundUser, userBookingData);
      this.currentUser.type = 'guest';
      this.currentUser.bookingService.createBookingHistory();
      return 'guest';
    } else {
      return false;
    }
  }
}
