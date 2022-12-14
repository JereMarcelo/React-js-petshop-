import './CartWidget.css'
import cart from './assets/carrito.png'

const CartWidget = () => {

    return(
        <div to='/cart' className="CartWidget">
            <img src={cart} alt='cart-widget' className='CartImg'/>
            {10}
        </div>
    );
}

export default CartWidget