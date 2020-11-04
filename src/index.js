import './css/styles.scss';
import {loginButton, loginView, roomsContainer, sidebar, userDashboard} from './elements.js';

loginButton.addEventListener('click', determineUser)

function determineUser() {
  loginView.classList.add('hidden');
  userDashboard.classList.remove('hidden');
  sidebar.classList.remove('hidden');
  roomsContainer.classList.remove('hidden');
}
