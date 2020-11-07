import ApiCall from './apiCall';
import Hotel from './data-model/hotel'
import './css/styles.scss';
import './images/bed.png'
import {loginButton, availableRoomsDisplay, loginView, roomsContainer, sidebar, userDashboard, usernameField, passwordField, datepicker} from './elements.js';

let today = new Date().toLocaleDateString();
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
  hotel.date = today;
  hotel.returnTodayBookings();
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
    hotel = new Hotel(data[0], data[1], data[2], today);
  })
  .then(response => openHotel())
  .catch(error => {
    console.log(error);
    // alert('Sorry, we are unable to retrieve data at this time, please try again later.')
  })
}

function openHotel() {
  hotel.launch()
  hotel.returnTodayBookings();
  displayAvailableRooms();
}

function loginUser(username, password) {
  if (hotel.userDirectory.chooseUser(username, password) !== false && username && password) {
    updateDashboard()
  } else {
    alert('Invalid username and/or password')
  }
}

function updateDashboard() {
  document.querySelector('#daily-revenue').innerText = hotel.calculateTotalRoomRevenue();
  document.querySelector('#percent-rooms-booked').innerText = hotel.percentRoomsBooked;
  loginView.classList.add('hidden');
  userDashboard.classList.remove('hidden');
  sidebar.classList.remove('hidden');
  roomsContainer.classList.remove('hidden');
}

function displayAvailableRooms() {
  hotel.availableRoomsToday.forEach(room => {
    let roomCard = `<div class="room-card flex-column">
    <div id="room-information">
      <img src="./images/bed.png" alt="bed-img" id="bed-img">
      <div class="flex-column">
        <h3>${room.roomType.toUpperCase()}</h3>
        <p>${room.numBeds} ${room.bedSize.toUpperCase()}</p>
        <p>$${room.costPerNight} per night</p>
      </div>
    </div>
    <button type="button" aria-label="book-room">Book Room</button>
    </div>`
    availableRoomsDisplay.insertAdjacentHTML('afterbegin', roomCard);
  })
}
// manager dashboard modal:
// <div class="flex-column">
//   <h3>$<span id="daily-revenue"></span></h3>
//   <h4>Daily Revenue</h4>
// </div>
// <div class="flex-column">
//   <h3 id="percent-rooms-booked"></h3>
//   <h4>Rooms Occupied</h4>
// </div>

//guest dashboard modal:
// <div class="flex-column">
//   <h3>$<span id="total-user-spent"></span></h3>
//   <h4>Spent On Rooms</h4>
// </div>
