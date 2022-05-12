'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// how the DOM works behind the scene
// DOM ELEMENT: <html> <head></head> <body></body> </html>
console.log(document.documentElement);
console.log(document.head); // <head></head>
console.log(document.body); // <body></body>

// Selecting, creating and Deleting Elements

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');

// creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class= "btn btn--close-cookie"> Got it!</button>';
//The Element.prepend() method inserts a set of Node objects
// or DOMString objects before the first child of the Element.
//DOMString objects are inserted as equivalent Text nodes.
// header.prepend(message);

//The Element.append() method inserts a set of Node objects
// or DOMString objects after the last child of the Element.
//DOMString objects are inserted as equivalent Text nodes.

header.append(message);

//The cloneNode() method of the Node interface returns
// a duplicate of the node on which this method was called.
//Its parameter controls if the subtree contained in a node is also cloned or not.
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// Delete element
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

// styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// Document.documentElement returns the Element that is the root
// element of the document (for example, the <html> element
// for HTML documents).

// The CSSStyleDeclaration.setProperty() method interface sets
// a new value for a property on a CSS style declaration object.

// The :root CSS pseudo-class matches the root element
//of a tree representing the document.
// In HTML, :root represents the <html> element and
// is identical to the selector html,
// except that its specificity is higher.

document.documentElement.style.setProperty('--color-primary', 'orangered');

// attrtibutes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';
console.log(logo.alt);

// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

// data attributes
console.log(logo.dataset.versionNumber);

// classes
//The Element.classList is a read-only property
//that returns a live DOMTokenList collection of the class
// attributes of the element. This can then be used
// to manipulate the class list.
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');

// Implementing Smooth Scrolling
//The Element.getBoundingClientRect() method returns
//a DOMRect object providing information about the size of
//an element and its position relative to the viewport.
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (x/y)', window.pageXOffset, pageYOffset);

  // Scrolling
  window.scrollTo(s1coords.left, s1coords.top);

  // Window.scrollTo() scrolls to a particular set of coordinates
  // in the document.

  // its syntax is:
  //  window.scrollTo(x-coord, y-coord)
  //   window.scrollTo(options)

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  //The Element interface's scrollIntoView() method scrolls
  //the element's parent container such that the element
  //on which scrollIntoView() is called is visible to the user.

  //The Element interface's scrollIntoView() method scrolls
  // the element's parent container such that the element
  // on which scrollIntoView() is called is visible to the user.
  section1.scrollIntoView({ behavior: 'smooth' });
});

// types of Events and EVENT Handlers

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// Event Propagation in Pratice
