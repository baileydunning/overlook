import ApiCall from './apiCall';
import Hotel from './data-model/hotel'
import './css/styles.scss';
import './images/bed.png';
import './images/bidet.png';
import './images/logout.png';
import './images/dashboard-navy.png';
import './images/users-navy.png';
import './images/bookings-navy.png';
import './images/room-navy.png';
import {
  availableRoomsDisplay,
  datepicker,
  dateString,
  bookingHistoryButton,
  guestDashboard,
  guestDashboardButton,
  guestDirectoryButton,
  guestModal,
  totalUserSpent,
  loginButton,
  loginView,
  managerDashboard,
  managerDashboardButton,
  managerModal,
  passwordField,
  roomsDisplay,
  sidebar,
  seeRoomsButton,
  userDashboard,
  usernameField,
  userBookingHistory,
  userCurrentBookings,
  userPreviousBookings
} from './elements.js';

let today = new Date("01/21/2020").toDateString();
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
  updateDate(event);
});

managerDashboardButton.addEventListener('click', () => {
  managerModal.style.display = 'block';
})

guestDashboardButton.addEventListener('click', () => {
  guestModal.style.display = 'block';
})

bookingHistoryButton.addEventListener('click', showBookingHistory);

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
  updateDisplay();
}

function loginUser(username, password) {
  let userType = hotel.userDirectory.chooseUser(username, password);
  if (username && password && userType !== false) {
    updateDashboard(userType);
    hotel.userDirectory.currentUser.bookingService.sortBookingsByDate(today);
  } else {
    alert('Invalid username and/or password')
  }
}

function updateDisplay() {
  dateString.innerText = new Date(today).toDateString()
  displayAvailableRooms();
  document.querySelector('#daily-revenue').innerText = hotel.calculateTotalRoomRevenue();
  document.querySelector('#percent-rooms-booked').innerText = hotel.percentRoomsBooked;
}

function updateDashboard(userType) {
  loginView.classList.add('hidden');
  roomsDisplay.classList.remove('hidden');
  if (userType === 'manager') {
    managerDashboard.classList.remove('hidden');
  } else if (userType === 'guest') {
    let firstName = hotel.userDirectory.currentUser.name.split(' ');
    document.querySelector('#user-first-name').innerText = firstName[0];
    totalUserSpent.innerText = hotel.userDirectory.currentUser.returnTotalSpentOnRooms();
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
      <div class="flex-row">
        <div class="flex-column">
          <p>${room.numBeds} ${room.bedSize.toUpperCase()}</p>
          <p>$${room.costPerNight} per night</p>
        </div>
        ${checkRoomForBidet(room)}
      </div>
    </div>
    <div><button type="button" aria-label="book-room">Book Room</button></div>
    </div>`
    availableRoomsDisplay.insertAdjacentHTML('afterbegin', roomCard);
  })
}

function checkRoomForBidet(room) {
  return (room.bidet === true) ? `<img src="./images/bidet.png" alt="bidet-img" id="bidet-img">` : ''
}

function updateDate(event) {
  today = new Date(event.target.value).toDateString();
  hotel.date = today;
  dateString.innerText = new Date(event.target.value).toDateString()
  hotel.returnTodayBookings();
  hotel.userDirectory.currentUser.bookingService.sortBookingsByDate(today)
  updateDisplay();
}

function showBookingHistory() {
  roomsDisplay.classList.add('hidden');
  userBookingHistory.classList.remove('hidden');
  displayBookings(hotel.userDirectory.currentUser.bookingService.currentBookings, userCurrentBookings);
  displayBookings(hotel.userDirectory.currentUser.bookingService.previousBookings, userPreviousBookings);
}

function displayBookings(bookings, container) {
  container.innerHTML = ''
  bookings.forEach(booking => {
    booking.date = new Date(booking.date).toDateString();
    let bookingCard = `<div class="flex-row">
    <p>${booking.date}</p>
    <p>$${booking.cost}</p>
    </div>`
    container.insertAdjacentHTML('afterbegin', bookingCard);
  })
}

//guest dashboard modal:
// <div class="flex-column">
//   <h3>$<span id="total-user-spent"></span></h3>
//   <h4>Spent On Rooms</h4>
// </div>
