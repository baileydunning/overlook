# Overlook

## Abstract

`Overlook` is an application developed by [Bailey Dunning](https://github.com/baileydunning) as a M2 final solo project at the [Turing School of Software and Design](https://turing.io/). It is a hotel management tool for hotel customers and staff to manage guests and room bookings. It was developed with `object-oriented programming (OOP`) / `test-driven development (TDD)` in mind and an `API` was used to send and recieve booking data.

## How to Access this Application

- Visit the [deployed site](https://baileydunning.github.io/overlook/).

- Or, on your command line:

  + Clone the repo- `git clone git@github.com:baileydunning/overlook.git`

  + Install NPM packages- `npm install`

  + Start application- `npm start`

  + In your browser, go to `localhost:8080`

- To test the code:

  - `cd`  into the repo, then run- `npm test`

## Built With:

- JavaScript
- HTML
- SCSS
- Webpack
- APIs (User Data, Room Data, Booking Data)

## Functionality

+ Login into the app using one of the following credentials:
  1. username: `manager` | password: `overlook2020`
  2. username: `customer#` | password: `overlook2020` (where # is between 1 & 50)
+ Upon logging in, the user is shown a display of all the available rooms for today with an ability to filter by room type or select a new date.
+ Navigation includes a dashboard modal with relevant user stats, a link to booking history, a link to the rooms display and for the manager, a link to the guest directory.
+ Both users are able to add and remove bookings, although a customer is limited to manipulating data exclusively attached to their personal ID.
