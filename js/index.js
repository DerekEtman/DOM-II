// Your code goes here

//random color gen
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

/* Nav &  header*/

  // changes font color when mouse moves over logo.
const logoMouse = document.querySelector('.logo-heading');
logoMouse.addEventListener('mouseover', () => {
    logoMouse.style.color = getRandomColor();
})

const navBg = document.querySelector('.main-navigation');
navBg.addEventListener('mouseover', (e) => {
  navBg.style.backgroundColor = getRandomColor();
})

const  busImg = document.querySelector('.intro img');

busImg.addEventListener('dblclick', () => {
  // console.log('Hello!')
  busImg.style.transform = 'rotate(180deg)';
})




// /*  Main content */

// const letsGo = document.querySelector('.content-section .text-content').style.resize =
// "both";




const busCrash = document.querySelector('.busCrash img')

busCrash.addEventListener('wheel', () => {
    console.log('Hello! BusCrash')
})
