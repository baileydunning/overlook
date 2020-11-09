import ApiCall from './apiCall';
import Hotel from './data-model/hotel'
import './css/styles.scss';
import './images/bed.png';
import './images/bidet.png';
import './images/logout.png';
import './images/dashboard-white.png';
import './images/users-white.png';
import './images/bookings-white.png';
import './images/room-white.png';
import {
  availableRoomsDisplay,
  bookingHistoryButton,
  dashboardButton,
  datepicker,
  dateString,
  displayAvailableRoomsButton,
  guestDirectoryButton,
  guestStats,
  guestsContainer,
  header,
  loginButton,
  loginView,
  searchBarGuestDirectory,
  managerStats,
  modal,
  navigation,
  passwordField,
  roomsDisplay,
  searchArea,
  guestDirectoryDisplay,
  sidebar,
  totalUserSpent,
  userBookingHistory,
  userCurrentBookings,
  userDashboard,
  usernameField,
  userPreviousBookings
} from './elements.js';

let today = new Date("01/21/2020").toDateString();
let hotel;
let userApi;
let roomApi;
let bookingApi;

window.onload = instantiateApis();
window.onclick = () => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}

loginButton.addEventListener('click', () => {
  loginUser(usernameField.value, passwordField.value)
});

datepicker.addEventListener('change', (event) => {
  updateDate(event);
});

dashboardButton.addEventListener('click', () => {
  modal.style.display = 'block';
})

searchBarGuestDirectory.addEventListener('search', searchGuests)

bookingHistoryButton.addEventListener('click', showBookingHistory);
displayAvailableRoomsButton.addEventListener('click', displayAvailableRooms);
guestDirectoryButton.addEventListener('click', displayGuestDirectory);

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
  dateString.innerText = new Date(today).toDateString()
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

// function updateDisplay() {
//   dateString.innerText = new Date(today).toDateString()
// }

function updateDashboard(userType) {
  let firstName = hotel.userDirectory.currentUser.name.split(' ');
  document.querySelector('#user-first-name').innerText = firstName[0];
  loginView.classList.add('hidden');
  header.classList.remove('hidden');
  navigation.classList.remove('hidden');
  displayAvailableRooms();
  if (userType === 'manager') {
    document.querySelector('#daily-revenue').innerText = hotel.calculateTotalRoomRevenue();
    document.querySelector('#percent-rooms-booked').innerText = hotel.percentRoomsBooked;
    guestDirectoryButton.classList.remove('hidden');
    managerStats.classList.remove('hidden');
  } else if (userType === 'guest') {
    totalUserSpent.innerText = hotel.userDirectory.currentUser.returnTotalSpentOnRooms();
    guestStats.classList.remove('hidden');
  }
}

function displayAvailableRooms() {
  hotel.returnTodayBookings();
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
  userBookingHistory.classList.add('hidden');
  guestDirectoryDisplay.classList.add('hidden');
  roomsDisplay.classList.remove('hidden');
}

function checkRoomForBidet(room) {
  return (room.bidet === true) ? `<img src="./images/bidet.png" alt="bidet-img" id="bidet-img">` : ''
}

function updateDate(event) {
  today = new Date(event.target.value).toDateString();
  hotel.date = today;
  dateString.innerText = new Date(today).toDateString();
  hotel.userDirectory.currentUser.bookingService.sortBookingsByDate(today);
  displayAvailableRooms();
}

function displayGuestDirectory() {
  roomsDisplay.classList.add('hidden');
  userBookingHistory.classList.add('hidden');
  guestDirectoryDisplay.classList.remove('hidden');
  guestsContainer.innerHTML = '';
  hotel.userDirectory.guestList.forEach(guest => {
    guest.bookingService.sortBookingsByDate(today);
    let guestCard = `<div class="flex-row">
      <h3 padding-right="25px">${guest.id}</h3>
      <h4>${guest.name.toUpperCase()}</h4>
      <p>Total Spent: $${guest.returnTotalSpentOnRooms()}</p>
    </div>`
    guestsContainer.insertAdjacentHTML('afterbegin', guestCard);
  })
}

function searchGuests() {
  console.log(searchBarGuestDirectory.value)
  guestsContainer.innerHTML = '';
  let matchedGuests = hotel.userDirectory.searchGuests(searchBarGuestDirectory.value);
  matchedGuests.forEach(guest => {
    let guestCard = `<div class="flex-row">
      <h3 padding-right="25px">${guest.id}</h3>
      <h4>${guest.name.toUpperCase()}</h4>
      <p>Total Spent: $${guest.returnTotalSpentOnRooms()}</p>
    </div>`
    guestsContainer.insertAdjacentHTML('afterbegin', guestCard);
  });
}

function showBookingHistory() {
  roomsDisplay.classList.add('hidden');
  guestDirectoryDisplay.classList.add('hidden');
  userBookingHistory.classList.remove('hidden');
  displayBookings(hotel.userDirectory.currentUser.bookingService.currentBookings, userCurrentBookings, 'Current Bookings:');
  displayBookings(hotel.userDirectory.currentUser.bookingService.previousBookings, userPreviousBookings, 'Previous Bookings:');
}

function displayBookings(bookings, container, header) {
  header = `<h3>${header}</h3>`
  container.innerHTML = ''
  bookings.forEach(booking => {
    booking.date = new Date(booking.date).toDateString();
    let bookingCard = `<div class="flex-row">
    <p>${booking.date}</p>
    <p>$${booking.cost}</p>
    </div>`
    container.insertAdjacentHTML('afterbegin', bookingCard);
  })
  container.insertAdjacentHTML('afterbegin', header);
}
