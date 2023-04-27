/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
try {
  fetch(ENDPOINT)
    .then((response) => response.json())
    .then((cars) => {
      cars.sort((a, b) => a.brand.localeCompare(b.brand));
      console.log(cars);
    });
} catch (err) {
  console.error(err);
}

/**  <main>
      <div class="wrapper">
        <div class="container">
          <h1>Our Cars List</h1>
          <div id="output">
            <!-- Results goes here -->
          </div>
        </div>
      </div>
    </main>
    
    
    [
  {
    "brand": "Seat",
    "models": [
      "Alhambra",*/
