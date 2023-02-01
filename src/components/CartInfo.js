import React from 'react'
import { useSelector } from 'react-redux'

function CartInfo() {
    const listCart = useSelector(state => state.listCart);
    // Tính tổng tiền
    const calTotalAmount = ()=>{
        let totalAmount = 0;
        listCart.forEach(cart => {
            totalAmount+=cart.product.price*cart.quantity;
        });
        return totalAmount;
    }
    let elementInfo = '';
    if (listCart.length == 0) {
        elementInfo = <tr>
            <th colSpan={6}>Empty product in your cart</th>
        </tr>
    } else {
        elementInfo = <tr>
            <td colSpan={4}>
                There are <b>{listCart.length}</b> items in your shopping cart.
            </td>
            <td colSpan={2} className="total-price text-left">
                {calTotalAmount()} USD
            </td>
        </tr>
    }
    return (
        <>
            <tfoot id="my-cart-footer">
                {/* CART FOOTER */}
                {elementInfo}
                
            </tfoot>
        </>
    )
}

export default CartInfo