import './Cart.css'

const Cart = ({cart}) => {
    // const cart = props.cart   //option-1
    // const {cart} = props   //option-2
    console.log(cart)

    let totalPrice = 0
    let totalShipping = 0
    for (const product of cart) {
        totalPrice = totalPrice + product.price
        totalShipping = totalShipping + product.shipping
    }
    const tax = totalPrice*7/100
    const grandTotal = totalPrice + totalShipping + tax

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <h3>Selected Items: {cart.length}</h3>
            <h3>Total Price: ${totalPrice}</h3>
            <h3>Total Shipping Charge: ${totalShipping}</h3>
            <h3>Tax: ${tax.toFixed(2)}</h3>
            <h2>Grand Total: ${grandTotal}</h2>
        </div>
    );
};

export default Cart;