import loader from './components/loader.js'
import showCart from './components/showCard.js'
import showMenu from './components/showMenu.js'
import products from './components/products.js'
import getProducts from './helpers/getProducts.js'
/* Ocultar Loader */
loader()

/* Mostrar Menu */
showMenu()

/* Mostrar carrito */
showCart()

/* Products */
products(await getProducts())