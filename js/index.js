//DOM Elements
const time = document.querySelector('.time');
const greetingTime = document.querySelector('.greeting__time');
const greetingName = document.querySelector('.greeting__name');
const focusEdit = document.querySelector('.focus__edit');

//Options

const showAmPm = true;

//Show Time
function showTime() {
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  //Set AM or PM
  const amPM = hour >= 12 ? 'PM' : 'AM';

  //12hr Format
  hour = hour % 12 || 12;

  //Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero( 
    sec
    )} ${showAmPm ? amPM : ''}`;

  setTimeout(showTime, 1000);
}

//Add Zeros
function addZero(num) {
  return (parseInt(num, 10) < 10 ? '0' : '') + num;
}

//Set Background and Greeting
function setBackgroundGreeting(){
  let today = new Date();
  let hour = today.getHours();

  if(hour < 12) {
    //Morning
    document.body.style.backgroundImage = "url('/img/morning.jpg')"
    greetingTime.textContent = 'Good Morning,';
  } else if(hour < 18) {
    //Afternoon
    document.body.style.backgroundImage = "url('/img/afternoon.jpg')"
    greetingTime.textContent = 'Good Afternoon,';
  } else {
    //Evening
    document.body.style.backgroundImage = "url('/img/night.jpg')"
    greetingTime.textContent = 'Good Evening,';
  }
}

//Get Name
function getName() {
  if (localStorage.getItem('name') === null) {
    greetingName.textContent = '{Your Name}';
  } else {
    greetingName.textContent = localStorage.getItem('name');
  }
}

//Set Name
function setName(e) {
  if (e.type === 'keypress') {
    if(e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      greetingName.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
} 

//Get Focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
      focusEdit.textContent = '{Enter Your Focus For Today}';
    } else {
        focusEdit.textContent = localStorage.getItem('focus');
    }
  }

//Set Focus
function setFocus(e) {
    if (e.type === 'keypress') {
      if(e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('getFocus', e.target.innerText);
        focusEdit.blur();
      }
    } else {
      localStorage.setItem('getFocus', e.target.innerText);
    }
  } 

greetingName.addEventListener('keypress', setName);
greetingName.addEventListener('blur', setName);
focusEdit.addEventListener('keypress', setFocus);
focusEdit.addEventListener('blur', setFocus);

//Run
showTime();
setBackgroundGreeting();
getName();
getFocus();