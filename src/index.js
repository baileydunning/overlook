import ApiCall from './apiCall';
import Hotel from './data-model/hotel'
import './css/styles.scss';
// import './images/stanley-bg.jpg'
import {loginButton, loginView, roomsContainer, sidebar, userDashboard, usernameField, passwordField} from './elements.js';

let today = new Date("2020/1/15").toLocaleDateString();
let userApi;
let roomApi;
let bookingApi;
let hotel;

window.onload = instantiateApis()

loginButton.addEventListener('click', () => {
  loginUser(usernameField.value, passwordField.value)
});

datepicker.addEventListener('change', (event) => {
  today = new Date(event.target.value).toLocaleDateString();
  hotel.returnTodayBookings(today);
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
  })
  .then(response => openHotel())
  .catch(error => {
    console.log(error);
    // alert('Sorry, we are unable to retrieve data at this time, please try again later.')
  })
}

function openHotel() {
  hotel.launch()
  hotel.returnTodayBookings(today);
}

function loginUser(username, password) {
  if (hotel.userDirectory.chooseUser(username, password) !== false && username && password) {
    updateDashboard()
    console.log('current user: ', hotel.userDirectory.currentUser)
  } else {
    alert('Invalid username and/or password')
  }
}

function updateDashboard() {
  document.querySelector('#daily-revenue').innerText = hotel.calculateTotalRoomRevenue(today);
  document.querySelector('#percent-rooms-booked').innerText = hotel.percentRoomsBooked;
  loginView.classList.add('hidden');
  userDashboard.classList.remove('hidden');
  sidebar.classList.remove('hidden');
  roomsContainer.classList.remove('hidden');
}

function 
