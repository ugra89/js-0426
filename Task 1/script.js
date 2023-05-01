/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */
const form = document.querySelector('form');
const input = document.querySelector('input');
const output = document.querySelector('#output');
const outputpounds = document.createElement('div');
const outputgrams = document.createElement('div');
const outputounces = document.createElement('div');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  outputpounds.innerHTML = ' ';
  outputgrams.innerHTML = ' ';
  outputounces.innerHTML = ' ';
  function convert(primaryValue) {
    const pounds = primaryValue * 2.2046;
    const grams = primaryValue / 0.001;
    const ounces = primaryValue * 35.274;

    const resultOutputpounds = document.createElement('p');
    resultOutputpounds.textContent = `Jūsų svoris (${primaryValue}kg) yra lygus ${pounds.toFixed(
      2
    )} svarais.`;
    const resultOutputgrams = document.createElement('p');
    resultOutputgrams.textContent = `Jūsų svoris (${primaryValue}kg) yra lygus ${grams.toFixed(
      2
    )} gramais.`;
    const resultOutputounces = document.createElement('p');
    resultOutputounces.textContent = `Jūsų svoris (${primaryValue}kg) yra lygus ${ounces.toFixed(
      2
    )} uncijomis.`;

    outputpounds.append(resultOutputpounds);
    outputgrams.append(resultOutputgrams);
    outputounces.append(resultOutputounces);
    output.append(outputpounds);
    output.append(outputgrams);
    output.append(outputounces);
  }

  const kg = Number(input.value);
  convert(kg);
});
