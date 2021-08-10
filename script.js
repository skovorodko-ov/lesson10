'use strict';

const books = document.querySelectorAll('.book'),
      aside = document.querySelector('.books'),
      titleBook3 = books[4].querySelector('a'),
      adv = document.querySelector('.adv'),
      liBook2 = books[0].querySelectorAll('li'),
      liBook5 = books[5].querySelectorAll('li'),
      li = document.createElement('li'),
      liBook6 = books[2].querySelectorAll('li');

aside.prepend(books[1]);
aside.append(books[2]);
books[3].before(books[4]);

document.body.style.backgroundImage = 'url(./image/adv.jpg)';

titleBook3.innerText = 'Книга 3. this и Прототипы Объектов';

adv.remove();

liBook2[1].append(liBook2[3]);
liBook2[3].append(liBook2[6]);
liBook2[6].append(liBook2[8]);
liBook2[9].append(liBook2[2]);

liBook5[1].append(liBook5[9]);
liBook5[4].append(liBook5[2]);
liBook5[7].append(liBook5[5]);

liBook6[9].prepend(li);
li.innerText = 'Глава 8: За пределами ES6';