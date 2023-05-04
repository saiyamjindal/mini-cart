import {FaShoppingCart} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { toggleAction } from '../redux/actions/action4'

const Navbar = () => {
    const itemsCount = useSelector((state)=>state.reducer2.totalQuantity)
    const dispatch = useDispatch()
    const toggleHandler = function(){
        dispatch(toggleAction())
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{background:'black'}}>
            <div className="container">
                <a className="navbar-brand" href="#"><h3>Redux Saga</h3></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto text-start">
                        <li className="nav-item">
                            <button className="nav-link active" aria-current="page" style={{'background':'transparent','border':'none'}} onClick={toggleHandler}>Cart &nbsp; <FaShoppingCart></FaShoppingCart> &nbsp; <span style={{display:'inline-flex',width:'30px',height:'30px',backgroundColor:'white',color:'black',alignItems:'center',justifyContent:'center',borderRadius:'50%'}}>{itemsCount}</span></button>
                        </li>
                        
                    </ul>

                </div>
            </div>
        </nav>
    )
}
export default Navbar