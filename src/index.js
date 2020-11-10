import ApiCall from './apiCall';
import Hotel from './data-model/hotel';
import Manager from './data-model/manager';
import User from './data-model/user';
import './css/styles.scss';
import './images/bed.png';
import './images/bidet.png';
import './images/logout.png';
import './images/dashboard-navy.png';
import './images/users-white.png';
import './images/bookings-white.png';
import './images/room-white.png';
import {
  availableRoomsDisplay,
  calendar,
  guestDirectoryButton,
  guestsContainer,
  roomFilter,
  searchBarGuestDirectory,
  modal,
  searchBarBookingHistory,
  closeModal,
  passwordField,
  roomsDisplay,
  guestDirectoryDisplay,
  userBookingHistory,
  userCurrentBookings,
  usernameField,
  userPreviousBookings
} from './elements.js';

let today = new Date().toDateString();
let hotel;
let userApi;
let roomApi;
let bookingApi;

// EVENT LISTENERS

window.onload = instantiateApis();
window.onclick = () => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}

document.querySelector('#login-button').addEventListener('click', () => {
  loginUser(usernameField.value, passwordField.value)
});

calendar.addEventListener('change', (event) => {
  updateDate(event);
});

document.querySelector('#dashboard-button').addEventListener('click', () => {
  modal.style.display = 'block';
})

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
})

searchBarGuestDirectory.addEventListener('search', searchGuests);
searchBarBookingHistory.addEventListener('keyup', searchBookings);
document.querySelector('#booking-history-button').addEventListener('click', showBookingHistory);
document.querySelector('#see-rooms-button').addEventListener('click', displayAvailableRooms);
guestDirectoryButton.addEventListener('click', displayGuestDirectory);
roomFilter.addEventListener('change', filterByRoomType);

// API INSTANTIATION

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
  .then(() => openHotel())
  .catch(error => {
    console.log(error);
    // alert('Sorry, we are unable to retrieve data at this time, please try again later.')
  })
}

// DATE HANDLING

function formatDate(today, joinBy) {
    today = new Date(today);
    let month = '' + (today.getMonth() + 1);
    let day = '' + today.getDate();
    let year = today.getFullYear();

    if (month.length < 2) { month = '0' + month };
    if (day.length < 2) { day = '0' + day };

    return [year, month, day].join(joinBy);
}

function updateDate(event) {
  today = new Date(event.target.value).toDateString();
  hotel.date = today;
  hotel.userDirectory.currentUser.bookingService.sortBookingsByDate(today);
  displayAvailableRooms();
}

// LAUNCH APP

function openHotel() {
  hotel.launch();
  let dashedDate = formatDate(today, '-');
  calendar.setAttribute('value', `${dashedDate}`);
  calendar.setAttribute('min', `${dashedDate}`);
}

function loginUser(username, password) {
  let userType = hotel.userDirectory.chooseUser(username, password);
  if (username && password && userType !== false) {
    updateDashboard();
    hotel.userDirectory.currentUser.bookingService.sortBookingsByDate(today);
    displayAvailableRooms();
  } else {
    alert('Invalid username and/or password')
  }
}

function updateDashboard() {
  let firstName = hotel.userDirectory.currentUser.name.split(' ');
  document.querySelector('#user-first-name').innerText = firstName[0];
  document.querySelector('.login-screen').classList.add('hidden');
  document.querySelector('.header').classList.remove('hidden');
  if (hotel.userDirectory.currentUser instanceof Manager) {
    document.querySelector('#daily-revenue').innerText = hotel.calculateTotalRoomRevenue();
    document.querySelector('#percent-rooms-booked').innerText = `${hotel.percentRoomsBooked}%`;
    guestDirectoryButton.classList.remove('hidden');
    searchBarBookingHistory.classList.remove('hidden');
    document.querySelector('.manager-stats').classList.remove('hidden');
  } else if (hotel.userDirectory.currentUser instanceof User) {
    document.querySelector('#total-user-bill').innerText = hotel.userDirectory.currentUser.returnBill();
    document.querySelector('#total-user-spent').innerText = hotel.userDirectory.currentUser.returnTotalSpentOnRooms();
    document.querySelector('.guest-stats').classList.remove('hidden');
  }
}

// AVAILABLE ROOMS

function displayAvailableRooms() {
  hotel.returnTodayBookings();
  createRoomCards(hotel.availableRoomsToday);
  document.querySelector('#date-string').innerText = `Available Rooms: ${hotel.availableRoomsToday.length}`;
  userBookingHistory.classList.add('hidden');
  guestDirectoryDisplay.classList.add('hidden');
  roomsDisplay.classList.remove('hidden');
}

function createRoomCards(rooms) {
  availableRoomsDisplay.innerHTML = '';
  rooms.forEach(room => {
    let roomCard = `<div class="room-card flex-column" id="room-${room.number}">
    <h3>${room.roomType.toUpperCase()}</h3>
    <div id="room-information">
      <img src="./images/bed.png" alt="bed-img" id="bed-img">
      <div class="flex-row">
        <div class="flex-column">
          <p>Room Number: ${room.number}</p>
          <p>${room.numBeds} ${room.bedSize.toUpperCase()}</p>
          <p>$${room.costPerNight} per night</p>
        </div>
        ${checkRoomForBidet(room)}
      </div>
    </div>
    <div><button id="book-room-button-${room.number}" value="${room.number}" type="button" aria-label="book-room">Book Room</button>${checkManagerStatus(room)}</div>
    </div>`
    availableRoomsDisplay.insertAdjacentHTML('afterbegin', roomCard);
  })
  if (rooms.length >= 1) {
    addEventListenersToRoomCards(rooms);
  }
}

function checkManagerStatus(room) {
  return hotel.userDirectory.currentUser instanceof Manager ? `<input type="text" placeholder="Enter Guest's ID" id="id-input-for-room-${room.number}"></input>` : ''
}

function checkRoomForBidet(room) {
  return (room.bidet === true) ? `<img src="./images/bidet.png" alt="bidet-img" id="bidet-img">` : ''
}

function addEventListenersToRoomCards(rooms) {
  rooms.forEach(room => {
    let bookRoomButton = document.querySelector(`#book-room-button-${room.number}`);
    bookRoomButton.addEventListener('click', bookRoom)
  })
}

function filterByRoomType() {
  let selection = document.getElementById('roomType-filter').elements['roomType-filter'].value;
  if (selection === 'all') {
    createRoomCards(hotel.availableRoomsToday)
  } else {
    let filteredRooms = hotel.filterByRoomType(selection);
    createRoomCards(filteredRooms);
  }
}

function bookRoom() {
  let onSuccess = () => {
    let updatedBookingData = bookingApi.getRequest()
    updatedBookingData.then(value => {
      hotel.rawBookingData = value;
    }).then(() => {
      updateBookingData();
      updateDashboard();
      displayAvailableRooms();
    })
  }
  let roomNumber = Number(event.target.getAttribute('value'));
  if (hotel.userDirectory.currentUser instanceof Manager) {
    let userIdField = document.querySelector(`#id-input-for-room-${roomNumber}`)
    if (userIdField.value !== '') {
      let userID = parseInt(userIdField.value);
      hotel.userDirectory.currentUser.addBooking(userID, roomNumber, formatDate(today, '/'), onSuccess);
    } else {
      alert('Please enter a User ID number to complete this booking.')
    }
  } else {
    hotel.userDirectory.currentUser.addBooking(roomNumber, formatDate(today, '/'), onSuccess);
  }
}

// BOOKING HISTORY

function showBookingHistory() {
  roomsDisplay.classList.add('hidden');
  guestDirectoryDisplay.classList.add('hidden');
  userBookingHistory.classList.remove('hidden');
  displayBookings(hotel.userDirectory.currentUser.bookingService.currentBookings, userCurrentBookings, 'Current Bookings:');
  displayBookings(hotel.userDirectory.currentUser.bookingService.previousBookings, userPreviousBookings, 'Previous Bookings:');
  addEventListenersToCurrentBookings(hotel.userDirectory.currentUser.bookingService.currentBookings)
}

function displayBookings(bookings, container, header) {
  header = `<h3>${header}</h3>`
  container.innerHTML = '';
  bookings.forEach(booking => {
    booking.date = new Date(booking.date).toDateString();
    let bookingCard = `<div class="booking-card flex-row">
    <p>${booking.date}</p>
    <p><b>Room: </b> ${booking.roomNumber}</p>
    <p><b>Guest ID: </b> ${booking.userID}</p>
    <p><b>Cost: </b>$${booking.cost}</p>
    <div>${checkBookingStatus(booking)}</div>
    </div>`
    container.insertAdjacentHTML('afterbegin', bookingCard);
  })
  container.insertAdjacentHTML('afterbegin', header);
}

function checkBookingStatus(booking) {
  return booking.status === 'current' ? `<button id="delete-booking-${booking.id}" value="${booking.id}" aria-label="delete-booking">Cancel Reservation</button>` : '';
}

function addEventListenersToCurrentBookings(bookings) {
  bookings.forEach(booking => {
    let currentBooking = document.querySelector(`#delete-booking-${booking.id}`);
    currentBooking.addEventListener('click', deleteBooking);
  })
}

function deleteBooking() {
  let onSuccess = () => {
    let updatedBookingData = bookingApi.getRequest()
    updatedBookingData.then(value => {
      hotel.rawBookingData = value;
    }).then(() => {
      updateBookingData();
      updateDashboard();
      showBookingHistory();
    })
  }
  let bookingID = event.target.getAttribute('value');
  let bookingMessage = document.querySelector('#booking-message-area');
  bookingMessage.innerText = `Booking ${bookingID} has been removed.`
  bookingApi.deleteRequest({id: parseInt(bookingID)}, onSuccess);
  setTimeout(() => {
    bookingMessage.innerText = '';
  }, 5000)
}

function updateBookingData() {
  hotel.updateBookings();
  hotel.returnTodayBookings();
  hotel.userDirectory.bookingData = hotel.rawBookingData;
  if (hotel.userDirectory.currentUser instanceof User) {
    let updatedUserBookingData = hotel.userDirectory.filterBookingData(hotel.userDirectory.currentUser.id);
    hotel.userDirectory.currentUser.bookingService.bookingData = updatedUserBookingData;
  } else if (hotel.userDirectory.currentUser instanceof Manager) {
    hotel.userDirectory.currentUser.bookingService.bookingData = hotel.userDirectory.bookingData;
  }
  hotel.userDirectory.currentUser.bookingService.bookingData = hotel.rawBookingData;
  hotel.userDirectory.currentUser.bookingService.createBookingHistory();
  hotel.userDirectory.currentUser.bookingService.sortBookingsByDate(today);
}

function searchBookings() {
  userCurrentBookings.innerHTML = '';
  userPreviousBookings.innerHTML = '';
  let userID = parseInt(searchBarBookingHistory.value);
  let foundGuest = hotel.userDirectory.findGuest(userID);
  let filteredBookings = hotel.userDirectory.currentUser.bookingService.filterBookingsByID(userID);
  let filteredBookingsContainer = document.querySelector('.filtered-bookings');
  if (!foundGuest) {
    showBookingHistory()
  } else if (filteredBookings.length >= 1) {
    console.log(filteredBookings)
    let header = `Booking History for ${foundGuest.name}`
    displayBookings(filteredBookings.reverse(), filteredBookingsContainer, header);
  }
}

// GUEST DIRECTORY

function displayGuestDirectory() {
  roomsDisplay.classList.add('hidden');
  userBookingHistory.classList.add('hidden');
  guestDirectoryDisplay.classList.remove('hidden');
  createGuestCards(hotel.userDirectory.guestList);
}

function createGuestCards(guests) {
  guestsContainer.innerHTML = '';
  guests.forEach(guest => {
    guest.bookingService.sortBookingsByDate(today);
    let guestCard = `<div class="flip-box">
    <div class="flip-box-inner">
      <div class="flip-box-front flex-column">
        <h3 padding-right="25px">${guest.id}</h3>
        <h4>${guest.name.toUpperCase()}</h4>
        <p>Total Spent: $${guest.returnTotalSpentOnRooms()}</p>
      </div>
      <div class="flip-box-back" id="guest-booking-history">
        <h3>${guest.name.toUpperCase()}'S BOOKING HISTORY</h3>
        <p>${displayGuestBookingHistory(guest)}</p>
      </div>
    </div>
    </div>`
    guestsContainer.insertAdjacentHTML('afterbegin', guestCard);
  })
}

function displayGuestBookingHistory(guest) {
  let guestBookingHistory = guest.bookingService.bookingHistory.map(booking => {
    return booking = `<b>${new Date(booking.date).toDateString()}:</b> Room ${booking.roomNumber}, $${booking.cost}<br>`
  })
  guestBookingHistory = guestBookingHistory.join(' ');
  return guestBookingHistory;
}

function searchGuests() {
  guestsContainer.innerHTML = '';
  let matchedGuests = hotel.userDirectory.searchGuests(searchBarGuestDirectory.value);
  createGuestCards(matchedGuests);
  let showAllButton = `<button type="button" id="show-all-guests-button">Show All</button>`
  document.querySelector('#show-all-guests').insertAdjacentHTML('afterend', showAllButton)
  document.querySelector('#show-all-guests-button').addEventListener('click', displayGuestDirectory);
  searchBarGuestDirectory.value = '';
}
