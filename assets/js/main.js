import cart from './components/cart.js';
import loader from './components/loader.js';
import products from './components/products.js';
import showCart from './components/showCart.js';
import showMenu from './components/showMenu.js';
import getProducts from './helpers/getProducts.js';


/* UI Elements */

/* Hidden loader */
loader()

/* Show Menu */
showMenu()

/* Show Cart */
showCart()

/* End UI Elements */

/* Products */
const { db, printProducts } = products(await getProducts())

/* Cart */
cart(db, printProducts)


const darkModeButton = document.getElementById('dark-mode-btn');
const body = document.body;

darkModeButton.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
});



function toggleNavbar() {
  var navbar = document.getElementById("navbar");
  if (window.pageYOffset > 0) {
    navbar.style.top = "5px";
  } else {
    navbar.style.top = "-0px";
  }
}


window.addEventListener("scroll", toggleNavbar);
