import '../styles/main.scss';
import './menu';
import '../../node_modules/smooth-scroll/dist/smooth-scroll.polyfills'
import './plugins';


const menuToggleAction = ()=> {
  if (window.innerWidth <= 850) {
    const addButtonChange = document.getElementById('mobileButton');
    addButtonChange.classList.toggle('buttonChange');
    const menuActionSlide = document.getElementById("navigation");
    menuActionSlide.classList.toggle("menuAction");
  }
};
window.menuToggleAction=menuToggleAction;

const showMoreWorks = () => {
  let foo = document.getElementById('gallery-button');
  if (foo.textContent === "load more work") {
    document.getElementById('gallery').style.height='1300px';
    document.getElementById('gallery').style.transition='1s';
    foo.textContent = "load less work";
  } else {
    document.getElementById('gallery').style.height='600px';
    document.getElementById('gallery').style.transition='1s';
    foo.textContent = "load more work";
  }
};
window.showMoreWorks=showMoreWorks;

