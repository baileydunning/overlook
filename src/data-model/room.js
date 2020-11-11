export default class Room {
  constructor(room) {
    this.number = parseInt(room.number),
    this.roomType = room.roomType,
    this.bidet = room.bidet,
    this.bedSize = room.bedSize,
    this.numBeds = parseInt(room.numBeds),
    this.costPerNight = parseInt(room.costPerNight)
  }
}
