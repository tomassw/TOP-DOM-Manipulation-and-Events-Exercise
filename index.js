const container = document.querySelector('.container');


//adding p
const p = document.createElement('p');
p.classList.add('red');
p.textContent = 'Hey, I\'m red';

container.appendChild(p);

p.style.cssText = 'color: red; font-size: 18px;';


//adding h3
const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3";
h3.style.cssText = 'color: blue; font-size: 18px;';

container.appendChild(h3);

//addinv a div
const div2 = document.createElement('div'); //1. creez div
container.appendChild(div2); //2. pun div2 in container

//3. creez h1
const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";

//4. adaug o clasa divului 2
div2.classList.add('div2');
//5.iau clasa (adresa) aia
const container2 = document.querySelector('.div2');
//6. adaug h1
container2.appendChild(h1);

//div style
div2.style.cssText = 'border: 1px solid black; background-color: pink;';

//adding p
const p2 = document.createElement('p');
p2.textContent = 'ME TOO!';
p2.style.cssText = 'color: black; font-size: 18px';

container2.appendChild(p2);

