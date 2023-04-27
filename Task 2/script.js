/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
// {/* <main>
//       <div class="wrapper">
//         <div class="btn">
//           <div id="btn__element">CLICK ME</div>
//           <div id="btn__state">0</div>
//         </div>
//       </div>
//     </main> */}

const clickBtn = document.getElementById('btn__element');
// console.log(clickBtn);
const countState = document.getElementById('btn__state');
let countClicks = 0;
clickBtn.addEventListener('click', () => {
  countClicks += 1;
  countState.innerText = countClicks;
  //   console.log(countState);
});
