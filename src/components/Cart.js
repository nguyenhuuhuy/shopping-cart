import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { act_change_notify, act_delete_cart, act_update_cart } from '../actions';
import { NOTIFY_DELETE_CART, NOTIFY_UPDATE_SUCCESS } from '../constants/messege';

function Cart(props) {
    let { cart, stt } = props;
    let [quantity, setQuantity] = useState(0);

    const dispatch = useDispatch();

    let cartQuantity = (quantity == 0) ? cart.quantity : quantity;
    const handleUpdateCart = () => {
        dispatch(act_update_cart(cart.product.productId, quantity));
        dispatch(act_change_notify(NOTIFY_UPDATE_SUCCESS))
    }
    const handleDeleteCart = () => {
        dispatch(act_delete_cart(cart.product.productId));
        dispatch(act_change_notify(NOTIFY_DELETE_CART))
    }
    return (
        <tr>
            <th scope="row">{stt}</th>
            <td>{cart.product.productName}</td>
            <td>{cart.product.price} USD</td>
            <td>
                <input
                    name="cart-item-quantity-1"
                    type="number"
                    min={1}
                    value={cartQuantity}
                    onChange={(event) => setQuantity(event.target.value)}
                />
            </td>
            <td>
                <strong>{cart.product.price * cart.quantity} USD</strong>
            </td>
            <td>
                <a
                    className="label label-info update-cart-item"
                    href="#"
                    data-product=""
                    onClick={handleUpdateCart}
                >
                    Update
                </a>
                <a
                    className="label label-danger delete-cart-item"
                    href="#"
                    data-product=""
                    onClick={handleDeleteCart}
                >
                    Delete
                </a>
            </td>
        </tr>
    )
}

export default Cart