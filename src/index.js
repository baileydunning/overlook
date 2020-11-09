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
  calendar,
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
  closeModal,
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

let today = new Date().toDateString();
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

calendar.addEventListener('change', (event) => {
  updateDate(event);
});

dashboardButton.addEventListener('click', () => {
  modal.style.display = 'block';
})

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
})

searchBarGuestDirectory.addEventListener('search', searchGuests);
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
  hotel.launch();
  let dashedDate = formatDate(today, '-');
  console.log(dashedDate)
  calendar.setAttribute('value', `${dashedDate}`);
  calendar.setAttribute('min', `${dashedDate}`);
  console.log(calendar)
}

function loginUser(username, password) {
  let userType = hotel.userDirectory.chooseUser(username, password);
  if (username && password && userType !== false) {
    updateDashboard(userType);
    hotel.userDirectory.currentUser.bookingService.sortBookingsByDate(today);
    totalUserSpent.innerText = hotel.userDirectory.currentUser.returnTotalSpentOnRooms();
  } else {
    alert('Invalid username and/or password')
  }
}

function updateDashboard(userType) {
  let firstName = hotel.userDirectory.currentUser.name.split(' ');
  document.querySelector('#user-first-name').innerText = firstName[0];
  loginView.classList.add('hidden');
  header.classList.remove('hidden');
  displayAvailableRooms();
  if (userType === 'manager') {
    document.querySelector('#daily-revenue').innerText = hotel.calculateTotalRoomRevenue();
    document.querySelector('#percent-rooms-booked').innerText = `${hotel.percentRoomsBooked}%`;
    guestDirectoryButton.classList.remove('hidden');
    managerStats.classList.remove('hidden');
  } else if (userType === 'guest') {
    guestStats.classList.remove('hidden');
  }
}

function displayAvailableRooms() {
  hotel.returnTodayBookings();
  createRoomCards();
  dateString.innerText = `Available Rooms: ${hotel.availableRoomsToday.length}`;
  userBookingHistory.classList.add('hidden');
  guestDirectoryDisplay.classList.add('hidden');
  roomsDisplay.classList.remove('hidden');
}

function createRoomCards() {
  availableRoomsDisplay.innerHTML = '';
  hotel.availableRoomsToday.forEach(room => {
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
  addEventListenersToRoomCards();
}

function checkManagerStatus(room) {
  return hotel.userDirectory.currentUser.type === 'manager' ? `<input type="text" placeholder="Enter Guest's ID" id="id-input-for-room-${room.number}"></input>` : ''
}

function checkRoomForBidet(room) {
  return (room.bidet === true) ? `<img src="./images/bidet.png" alt="bidet-img" id="bidet-img">` : ''
}

function addEventListenersToRoomCards() {
  hotel.availableRoomsToday.forEach(availableRoom => {
    let bookRoomButton = document.querySelector(`#book-room-button-${availableRoom.number}`);
    bookRoomButton.addEventListener('click', bookRoom)
  })
}

function bookRoom() {
  let onSuccess = () => {
    let updatedBookingData = bookingApi.getRequest()
    updatedBookingData.then(value => {
      hotel.rawBookingData = value;
    }).then(() => {
      updateBookingData();
      displayAvailableRooms();
    })
  }
  let roomNumber = Number(event.target.getAttribute('value'));
  if (hotel.userDirectory.currentUser.type === 'manager') {
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

function formatDate(today, joinBy) {
    today = new Date(today);
    let month = '' + (today.getMonth() + 1);
    let day = '' + today.getDate();
    let year = today.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join(joinBy);
}

function updateDate(event) {
  today = new Date(event.target.value).toDateString();
  hotel.date = today;
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

// displayGuestBookingData(guest) {
//   guest.bookingService.currentBookings.forEach(booking => {
//     let guestCurrentBooking = `${booking.date}: ${booking.id}`
//   })
// }

function searchGuests() {
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
  searchBarGuestDirectory.value = '';
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
    let bookingCard = `<div class="booking-card flex-row">
    <p>${booking.date}</p>
    <p><b>Room: </b> ${booking.roomNumber}</p>
    <p><b>Guest ID: </b> ${booking.userID}</p>
    <p><b>Cost: </b>$${booking.cost}</p>
    <div>${checkBookingStatus(booking)}</div>
    </div>`
    container.insertAdjacentHTML('afterbegin', bookingCard);
  })
  addEventListenersToCurrentBookings();
  container.insertAdjacentHTML('afterbegin', header);
}

function checkBookingStatus(booking) {
  return booking.status === 'current' ? `<button id="delete-booking-${booking.id}" value="${booking.id}" aria-label="delete-booking">Cancel Reservation</button>` : '';
}

function addEventListenersToCurrentBookings() {
  hotel.userDirectory.currentUser.bookingService.currentBookings.forEach(booking => {
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
      updateBookingData()
      displayBookings(hotel.userDirectory.currentUser.bookingService.currentBookings, userCurrentBookings, 'Current Bookings:');
    })
  }
  let bookingID = event.target.getAttribute('value');
  bookingApi.deleteRequest({id: parseInt(bookingID)}, onSuccess);
}

function updateBookingData() {
  let currentUser = hotel.userDirectory.currentUser;
  hotel.updateBookings();
  hotel.returnTodayBookings();
  hotel.userDirectory.bookingData = hotel.rawBookingData;
  if (currentUser.type === 'guest') {
    let updatedUserBookingData = hotel.userDirectory.filterBookingData(currentUser.id);
    currentUser.bookingService.bookingData = updatedUserBookingData;
  } else {
    let updatedBookingData = hotel.userDirectory.bookingData;
    currentUser.bookingService.bookingData = updatedBookingData;
  }
  currentUser.bookingService.createBookingHistory();
  currentUser.bookingService.sortBookingsByDate(today);
}
