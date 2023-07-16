import './Product.css'

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>Price: ${price}</h4>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings} star</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default Product;