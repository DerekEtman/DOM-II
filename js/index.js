// Your code goes here

//random color gen
function getRandomColor() {
  var color = '#';
  var letter = '0123456789ABCDEF';
  for (var i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random() * 16)];
  }
  return color;
}

/* Nav &  header*/

// changes font color when mouse moves over logo.
const logoMouse = document.querySelector('.logo-heading');
logoMouse.addEventListener('mouseover', () => {
  logoMouse.style.color = getRandomColor();
})

const navBg = document.querySelector('.container');
navBg.addEventListener('mouseover', (e) => {
  navBg.style.backgroundColor = getRandomColor();
  event.stopPropagation();

})

const busImg = document.querySelector('.intro img');

busImg.addEventListener('click', () => {
  // console.log('Hello!')
  busImg.style.transform = 'rotate(180deg)';
})




/*  Main content */



let imgAppear = document.getElementById('keyDownBox')

imgAppear.addEventListener('keydown', (e) => {
  // if(e.keyCode == 27){
    let splashAd = document.createElement("img");
    splashAd.setAttribute('src', "img/lambda.png")
  // }
})

/*not working */
function resizeMe() {
  document.getElementById('resized').style.resize = "both";
};

const busCrash = document.querySelector('.busCrash img');


busCrash.addEventListener('wheel', (e) => {
  busCrash.setAttribute('src', 'img/Broken Screen.jpg')

});



/* bottom Content */
const blurAtt = () => {

  const focusHere = (e) => {
    var divElement = document.getElementById('destination')[0];
    divElement.style.backgroundColor = 'orange';
  };

  const blurHere = (e) => {
    var divElement = document.getElementById('destination')[0];
    divElement.style.backgroundColor = 'none';
  }

  const grabAtt = document.querySelector('.content-destination img');
  grabAtt.addEventListener('mouseover', (e) => {
    alert('This could get really annoying');
  
  
    grabAtt.addEventListener('focus', focusHere, false);
    grabAtt.addEventListener('blur', blurHere, false);
  
  });
}

document.addEventListener('DOMContentLoaded',blurAtt,false);
