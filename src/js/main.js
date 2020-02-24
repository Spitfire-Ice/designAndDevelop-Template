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

