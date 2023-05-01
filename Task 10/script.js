/* ------------------------------ TASK 10 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funkcijos.
-------------------------------------------------------------------------------------------- */
import { composition } from './modules/math/composition';
import { division } from './modules/math/division';
import { substraction } from './modules/math/subtraction';
import { multiplication } from './modules/math/multiplication';
import { one, two, three, four, five } from './modules/numbers/numbers';

console.log('composition', composition);

let a = composition(one, four);
let b = division(four, two);
let c = substraction(three, two);
let d = multiplication(five, two);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
