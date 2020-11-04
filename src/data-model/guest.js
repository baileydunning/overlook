import User from './user'

export default class Guest extends User {
  constructor(userData, username, password) {
    super(userData, username, password)
  }
}
