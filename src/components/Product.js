import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { act_buy_product, act_change_notify } from '../actions';
import { NOTIFY_BUY_SUCCESS } from '../constants/messege';

function Product(props) {
    const dispatch = useDispatch();
    const [quantity,setQuantity] = useState(1);
    let { product } = props;
    const handleBuyProduct = ()=>{
        dispatch(act_buy_product(product,quantity));
        dispatch(act_change_notify(NOTIFY_BUY_SUCCESS));
    }
    let elementBuy = '';
    if (product.quantity == 0) {
        elementBuy = <span className="price">{product.price}</span>
    } else {
        elementBuy = <><input
            name="quantity-product-1"
            type="number"
            defaultValue={1}
            min={1}
            onChange={(event)=>setQuantity(event.target.value)}
        />
            <a data-product={1} href="#" className="price" onClick={handleBuyProduct}>
                {" "}
                {product.price}{"$"}
            </a></>
    }
    return (
        <div className="media product">
            <div className="media-left">
                <a href="#">
                    <img
                        className="media-object"
                        src={product.image}
                        alt={product.productName}
                    />
                </a>
            </div>
            <div className="media-body">
                <h4 className="media-heading">{product.productName}</h4>
                <p>
                    {product.title}
                </p>
                {elementBuy}
            </div>
        </div>
    )
}

export default Product