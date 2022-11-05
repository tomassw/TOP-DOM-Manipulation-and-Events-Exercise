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
const secdiv = document.createElement('div');

