import ApiCall from './apiCall';
import Hotel from './data-model/hotel'
import './css/styles.scss';
import './images/bed.png'
import {
  availableRoomsDisplay,
  datepicker,
  guestDashboard,
  guestDashboardButton,
  guestDirectoryButton,
  guestModal,
  loginButton,
  loginView,
  managerDashboard,
  managerDashboardButton,
  managerModal,
  passwordField,
  roomsDisplay,
  sidebar,
  userDashboard,
  usernameField
} from './elements.js';

let today = new Date().toLocaleDateString();
let hotel;
let userApi;
let roomApi;
let bookingApi;

window.onload = instantiateApis();
window.onclick = () => {
  if (event.target === managerModal) {
    managerModal.style.display = 'none';
  } else if (event.target === guestModal) {
    guestModal.style.display = 'none';
  }
}

loginButton.addEventListener('click', () => {
  loginUser(usernameField.value, passwordField.value)
});

datepicker.addEventListener('change', (event) => {
  today = new Date(event.target.value).toLocaleDateString();
  hotel.date = today;
  hotel.returnTodayBookings();
  displayAvailableRooms();
});

managerDashboardButton.addEventListener('click', () => {
  managerModal.style.display = 'block';
})

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
  document.querySelector('#date-string').innerText = new Date(today).toDateString()
  displayAvailableRooms();
}

function loginUser(username, password) {
  let userType = hotel.userDirectory.chooseUser(username, password);
  if (username && password && userType !== false) {
    updateDashboard(userType)
  } else {
    alert('Invalid username and/or password')
  }
}

function updateDashboard(userType) {
  loginView.classList.add('hidden');
  roomsDisplay.classList.remove('hidden');
  if (userType === 'manager') {
    document.querySelector('#daily-revenue').innerText = hotel.calculateTotalRoomRevenue();
    document.querySelector('#percent-rooms-booked').innerText = hotel.percentRoomsBooked;
    managerDashboard.classList.remove('hidden');
  } else if (userType === 'guest') {
    guestDashboard.classList.remove('hidden');
  }
}

function displayAvailableRooms() {
  availableRoomsDisplay.innerHTML = '';
  hotel.availableRoomsToday.forEach(room => {
    let roomCard = `<div class="room-card flex-column" id="room-${room.number}">
    <h3>${room.roomType.toUpperCase()}</h3>
    <div id="room-information">
      <img src="./images/bed.png" alt="bed-img" id="bed-img">
      <div class="flex-column">
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

//guest dashboard modal:
// <div class="flex-column">
//   <h3>$<span id="total-user-spent"></span></h3>
//   <h4>Spent On Rooms</h4>
// </div>
