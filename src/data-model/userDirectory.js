import Manager from './manager'
import Guest from './guest'

export default class UserDirectory {
  constructor(userData) {
    this.rawUserData = userData,
    this.guestList = []
  }

  createGuestList() {
    this.guestList = this.rawUserData.reduce((acc, user) => {
      acc.push(new Guest(user));
      return acc
    }, []);
  }

  searchGuests(input) {

  }
}
