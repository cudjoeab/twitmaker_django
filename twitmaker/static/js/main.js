document.addEventListener('DOMContentLoaded', function() {
  const tweetsList = document.querySelector('.tweets');
  const form = document.querySelector('.new-tweet');

  // let form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
    console.log("User clicked submit button")
    event.preventDefault();
    let formData = new FormData(this);

    axios.post(
      this.action,
      formData,
      
    // adding new tweet to the list of tweets with Ajax 
    let tweet = document.createElement('li');
    let tweetMessage = document.createElement('p'); 

    tweetMessage.innerText = `${response.data.message}`; 
    tweet.appendChild(tweetMessage);
    tweetsList.appendChild(tweet); 
    )

    .then(function(response) {
      console.log(response.data);
    })
    
    .catch(function(error) {
      console.log(error);
    });



  });


});