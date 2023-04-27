/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const showUsers = document.getElementById('btn');
const output = document.getElementById('output');
const initialMessage = document.getElementById('message');

showUsers.addEventListener('click', () => {
  initialMessage.style.display = 'none';
  try {
    fetch(ENDPOINT)
      .then((response) => response.json())
      .then((users) => {
        users.sort((a, b) => a.login.localeCompare(b.login));
        users.forEach((element) => {
          const card = document.createElement('div');
          card.classList.add('card');
          const login = document.createElement('p');
          login.innerText = element.login;
          const avatar = document.createElement('img');
          avatar.src = element.avatar_url;
          card.append(login);
          card.append(avatar);
          output.append(card);
        });
      });
  } catch (err) {
    console.error(err);
  }
});

// {/* <div class="wrapper">
//         <div class="btn-container">
//           <button id="btn">Show Users</button>
//         </div>
//         <div class="output-cointainer">
//           <h1>Github Users</h1>
//           <div id="output">
//             <!-- Results goes here -->
//             <p id="message">Press "Show Users" button to see users</p>
//           </div>
//         </div>
//       </div> */}
