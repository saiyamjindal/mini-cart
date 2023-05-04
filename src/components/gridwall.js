import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { showProducts } from "../redux/actions/actions1"
import ProductComponent from "./productComponent"
const Gridwall = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(showProducts())
    }, [])
    const data = useSelector((state) => state.reducer1)
    return (
        <div className="container my-4">
            <h1>Products</h1>
            <div className="row d-flex flex-wrap">
                {data.map((product, index) => {
                    return (
                        <div className="col-lg-4 col-md-6 my-3" key={product.id}>
                            <ProductComponent  id = {product.id} name={product.name} price={product.price} brand={product.brand} category={product.category} image={product.image}></ProductComponent>
                        </div>
                    )

                })}
            </div>

        </div>

    )
}
export default Gridwall