import { useDispatch, useSelector } from "react-redux"
import { cartAction } from "../redux/actions/action2";
import { removeItem } from "../redux/actions/action3";
import { toggleAction } from "../redux/actions/action4";
import './cart.css'

const Cart = () => {
    const cartData = useSelector((state) => state.reducer2);
    const dispatch = useDispatch();
    const incrementHandler = function (item) {
        dispatch(cartAction(item))
    }
    const removeHandler = function (id) {
        dispatch(removeItem(id))
    }
    const toggleHandler = function(){
        dispatch(toggleAction())
    }
    return (
        <>
            <div className="container my-4">
                {cartData.items.length ? <div className="row d-flex">
                    <div className="col-lg-8 products">
                        {cartData.items.map((item, index) => {
                            return (
                                <div className="col-lg-12 my-4" key={index}>

                                    <div className="card">
                                        <div className="card-header d-flex justify-content-between">
                                            <h4>{item.name}</h4>
                                            <h4>{item.price * item.quantity} Rs</h4>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Brand : {item.brand}</h5>
                                            <p className="card-text">Category: {item.category}</p>
                                        </div>
                                        <div className="buttons d-flex" style={{ 'marginLeft': '1rem', 'border': '1px solid grey', 'marginBottom': '1rem', 'width': '90px' }}>
                                            <button className="btn-add" style={{ 'width': '36px', 'border': 'none' }} onClick={() => incrementHandler(item)}>+</button>
                                            &nbsp;&nbsp;
                                            <h4>{item.quantity}</h4>
                                            &nbsp;&nbsp;
                                            <button className="btn-remove" style={{ 'width': '36px', 'border': 'none', }} onClick={() => removeHandler(item.id)}>-</button>
                                        </div>
                                    </div>
                                </div>

                            )
                        })}
                    </div>
                    <div className="col-lg-4 checkout my-4">
                        {cartData.items.length ? <div className="col-lg-12">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                    </tr>
                                    {cartData.items.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{item.name} x {item.quantity}</td>
                                                <td>{item.price * item.quantity} Rs</td>
                                            </tr>
                                        )
                                    })}
                                    <tr>
                                        <td>Total</td>
                                        <td>{cartData.totalAmount} Rs</td>
                                    </tr>
                                </tbody>



                            </table>
                            <button className="button my-3" style={{ 'width': '100%', 'height': '46px' }}>Place Order</button>
                        </div> : ""}
                    </div>
                </div> : <h1>Your cart is empty!</h1>}
                <button className="button my-4" style={{width:'100px',height:'40px'}} onClick={toggleHandler}>Back</button>
            </div>
        </>



    )
}

export default Cart