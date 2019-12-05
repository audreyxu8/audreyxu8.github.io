var proxyurl = new XMLHttpRequest();
var request = new XMLHttpRequest();

request.open('GET', 'http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=626255EE99CF2B3C3348142C0C9B7250&steamid=76561198065642550&relationship=friend', true);

proxyurl.open('GET',"https://cors-anywhere.herokuapp.com/", true);

request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data.forEach(friend => {
      console.log(friend.steamid);
    })
  } else {
    console.log('error');
  }
}

request.send()