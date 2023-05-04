import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { cartAction } from '../redux/actions/action2';
import './productComponent.css'
const ProductComponent = (props) => {
    const dispatch = useDispatch();
    const [alert, setAlert] = useState(false)
    const addToCartHandler = (id, name, brand, category, price, quantity) => {
        const cartProduct = {
            id: id,
            name: name,
            brand: brand,
            category: category,
            price: price,
            quantity: quantity,

        }
        dispatch(cartAction(cartProduct))
        setAlert(true)
        setTimeout(() => {
            setAlert(false)
        }, 2000)
       

    }
    return (
        <>
            {alert ? <div className="alert alert-info" role="alert" style={{background:'green',color:'white'}}>
                Product added!
            </div>:""}
            <div className="box">
                <div className='image-box' style={{ 'background': `url(${props.image}) no-repeat center center/cover` }}></div>
                <div className='intro'>
                    <h4 className='title'>{props.name}</h4>
                    <p className='price'>Price: {props.price} Rs</p>
                    <button className='button add-to-cart' onClick={() => addToCartHandler(props.id, props.name, props.brand, props.category, props.price, 1)}>Add to Cart</button>
                </div>
            </div>
        </>

    )
}

export default ProductComponent