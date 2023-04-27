/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

const carsList = async () => {
  try {
    const response = await fetch(ENDPOINT);
    const cars = await response.json();
    cars.sort((a, b) => a.brand.localeCompare(b.brand));
    console.log(cars);
    const output = document.getElementById('output');

    cars.forEach((car) => {
      const card = document.createElement('div');
      card.classList.add('cars-Card');
      card.innerHTML = `<h2>Brand:
       ${car.brand}</h2> <h3>Models:</h3> <ul>${car.models
        .map((model) => `<li>${model}</li>`)
        .join('')}</ul>`;
      output.append(card);
    });
  } catch (err) {
    console.error(err);
  }
};
carsList();
