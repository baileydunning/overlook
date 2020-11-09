export default class ApiCall {
  constructor(url, name) {
    this.url = url,
    this.name = name
  }

  getRequest() {
    return fetch(this.url)
    .then(response => response.json())
    .then(data => data = data[this.name])
    .catch(err => console.log(err))
  }

  postRequest(newPost, onSuccess) {
    return fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost)
    })
    .then(response => response.json())
    .then(json => {
      console.log(json);
      onSuccess();
    })
    .catch(err => console.log(err))
  }

  deleteRequest(bookingID, onSuccess) {
    return fetch(this.url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookingID)
    })
    .then(response => response.json())
    .then(json => {
      onSuccess();
      console.log(json);
    })
    .catch(err => console.log(err))
  }
}
