import User from './user';
import Manager from './manager';

export default class UserDirectory {
  constructor(userData) {
    this.rawUserData = userData,
    this.currentUser = null,
    this.guestList = []
  }

  chooseUser(username, password) {
    if (username === 'manager' && password === 'overlook2020') {
      this.currentUser = new Manager({id: 0, name: 'Manager'});
    } else if (username.includes('customer') && password === 'overlook2020') {
      let userID = username.replace('customer', '').replace(/ /g, "");
      let foundUser = this.findGuest(userID);
      this.currentUser = new User(foundUser);
    } else {
      alert('Sorry your username and/or password was incorrect. Please try again!')
    }
  }

  createGuestList() {
    this.guestList = this.rawUserData.reduce((acc, user) => {
      acc.push(new User(user));
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
