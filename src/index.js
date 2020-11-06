import ApiCall from './apiCall';
import Hotel from './data-model/hotel'
import './css/styles.scss';
// import './images/stanley-bg.jpg'
import {loginButton, loginView, roomsContainer, sidebar, userDashboard, usernameField, passwordField} from './elements.js';

let userApi;
let roomApi;
let bookingApi;
let hotel;

window.onload = instantiateApis()

loginButton.addEventListener('click', () => {
  loginUser(usernameField.value, passwordField.value)
});

function instantiateApis() {
  userApi = new ApiCall('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users', 'users');
  roomApi = new ApiCall('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms', 'rooms');
  bookingApi = new ApiCall('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', 'bookings');
  fetchAllData();
}

function fetchAllData() {
  let userPromise = userApi.getRequest();
  let roomPromise = roomApi.getRequest();
  let bookingPromise = bookingApi.getRequest();

  Promise.all([userPromise, roomPromise, bookingPromise])
  .then(data => {
    hotel = new Hotel(data[0], data[1], data[2]);
    console.log(hotel)
  })
  .then(response => openHotel())
  .catch(err => {
    console.log(err);
    alert('Sorry, we are unable to retrieve data at this time, please try again later.')
  })
}

function openHotel() {
  hotel.userDirectory.createGuestList();
  hotel.bookingRecord.createBookingHistory();
  hotel.roomRecord.createRoomRecord();
  console.log(hotel)
}

function updateUI() {
  hotel.launch()
  console.log('hotel: ', hotel)
}

function loginUser(username, password) {
  if (username && password) {
    hotel.userDirectory.chooseUser(username, password)
    console.log('current user: ', hotel.userDirectory.currentUser)
    determineUser()
  } else {
    alert('Invalid username and/or password')
  }
}

function determineUser() {
  loginView.classList.add('hidden');
  userDashboard.classList.remove('hidden');
  sidebar.classList.remove('hidden');
  roomsContainer.classList.remove('hidden');
}
