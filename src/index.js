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

});

function instantiateApis() {
  userApi = new ApiCall('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users', 'userData');
  roomApi = new ApiCall('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms', 'roomData');
  bookingApi = new ApiCall('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', 'bookingData');
  fetchAllData();
}

function fetchAllData() {
  let userPromise = userApi.getRequest();
  let roomPromise = roomApi.getRequest();
  let bookingPromise = bookingApi.getRequest();

  Promise.all([userPromise, roomPromise, bookingPromise])
  .then(data => hotel = new Hotel(data[0], data[1], data[2]))
  .then(response => updateUI())
  .catch(err => {
    console.log(err);
    alert('Sorry, we are unable to retrieve data at this time, please try again later.')
  })
}

function updateUI() {

}

function loginUser(username, password) {

}

function determineUser() {
  loginView.classList.add('hidden');
  userDashboard.classList.remove('hidden');
  sidebar.classList.remove('hidden');
  roomsContainer.classList.remove('hidden');
}
