export default class User {
  constructor(userData, username, password) {
    this.rawUserData = userData,
    this.username = username,
    this.password = password,
		this.bookingRecord = []
	}
}
