import React from 'react'
import { useSelector } from 'react-redux'
import Cart from './Cart'
import CartInfo from './CartInfo'
import Notify from './Notify'

function ListCart() {
    const listCart = useSelector(state => state.listCart);
    let elementListCart = listCart.map((cart, index) => {
        return <Cart key={cart.product.productId} cart={cart} stt={index + 1} />
    })
    return (
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div className="panel panel-danger">
                <div className="panel-heading">
                    <h1 className="panel-title">Your Cart</h1>
                </div>
                <div className="panel-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th width="4%">#</th>
                                <th>Pokemon</th>
                                <th width="15%">Price</th>
                                <th width="4%">Quantity</th>
                                <th width="20%">Subtotal</th>
                                <th width="25%">Action</th>
                            </tr>
                        </thead>
                        <tbody id="my-cart-body">
                            {/* CART BODY */}
                            {elementListCart}
                        </tbody>
                        <CartInfo />
                    </table>
                </div>
            </div>
            <Notify />
        </div>
    )
}

export default ListCart