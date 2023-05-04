import {put, takeEvery} from 'redux-saga/effects'
import { SET_PRODUCTS, SHOW_PRODUCTS } from './constants'
function *getProducts(){

    let data = yield fetch("http://localhost:4000/products");
    data = yield data.json();
   
    yield put({type:SET_PRODUCTS,data})
}
function *productSaga(){
    yield takeEvery(SHOW_PRODUCTS,getProducts)
}
export default productSaga