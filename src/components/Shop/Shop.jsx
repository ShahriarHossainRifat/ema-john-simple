import { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart()
        console.log(storedCart)
    }, [])

    let [cart, setCart] = useState([])

    const handleAddToCart = (product) => {
        // console.log(product)
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}/>
            </div>
        </div>
    );
};

export default Shop;