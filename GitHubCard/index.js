/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

axios.get('https://api.github.com/users/drewgoenner')
.then( (response) => {
  console.log(response);
  const myCard = response.data
  console.log("My Info: ", myCard)
  

  const cardList = document.querySelector('.cards');
  const cardInfo = createCard(myCard);
  cardList.appendChild(cardInfo);
  })

  axios.get('https://api.github.com/users/drewgoenner/followers')
  
  
  .then ((followers) => {
    // console.log ("Followers Info: ", followers.data);
    // const followerUser = [];
    // followers.data.forEach(getLogin => {
    // followerUser.push(`${getLogin.login}`)
    // console.log(followerUser)

    followers.data.forEach(user => {
      axios.get(user.url)
      .then ((response) => {
        const followerCard = createCard(response.data);
        const cardList = document.querySelector('.cards');
        cardList.appendChild(followerCard)
      })
    })

     
    })
    
  

.catch((err) => {
  console.log(err);
})

const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'

];

followersArray.forEach(user => {
  axios.get(`https://api.github.com/users/${user}`)
    .then ((response) => {
      const otherCard = createCard(response.data);
      const cardList = document.querySelector('.cards');
      cardList.appendChild(otherCard)
    })
    .catch((err) => {
      console.log(err);
    })
  
})

const cardList = document.querySelector('.cards');
console.log(cardList);

function createCard(element) {
//create elements
  const card1 = document.createElement('div');
  const img1 = document.createElement('img');
  const info1 = document.createElement('div');
  const name1 = document.createElement('h3')
  const user1 = document.createElement('p');
  const location1 = document.createElement('p');
  const profile1 = document.createElement('p');
  const profAdd = document.createElement('a')
  const followers1 = document.createElement('p');
  const following1 = document.createElement('p');
  const bio1 = document.createElement('p');
  
//append elements
  card1.appendChild(img1);
  card1.appendChild(info1);
  info1.appendChild(name1);
  info1.appendChild(user1);
  info1.appendChild(location1)
  info1.appendChild(profile1);
  profile1.appendChild(profAdd);
  info1.appendChild(followers1);
  info1.appendChild(following1);
  info1.appendChild(bio1);

//add classes
  card1.classList.add("card");
  info1.classList.add("card-info");
  name1.classList.add("name");
  user1.classList.add("username");

//add content
img1.src = element.avatar_url;
name1.textContent = element.name;
user1.textContent = element.login;
location1.textContent = element.location;
const theProfAdd = element.url
profAdd.innerHTML = theProfAdd.link(element.url);
followers1.textContent = `Followers: ${element.followers}`;
following1.textContent = `Following: ${element.following}`;
bio1.textContent = element.bio;

return card1;
}

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
