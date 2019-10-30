class Data {
  // Error checking try..catch
  async showData() {
    try {
    // fetch JSON with user data
      let response = await fetch('https://jsonplaceholder.typicode.com/users');
      let users = await response.json();
      let id = +prompt('What\'s user id do you need? (1-10)', 1);
      id--;
      if (id >= 0 && id < 10) {
        alert(JSON.stringify(users[id], null, 2));
      } else {
        alert('Wrong id')
      }
    } catch(e) {
      alert(e);
    }
  }
}
let userData = new Data();
userData.showData()