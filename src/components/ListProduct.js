import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'

function ListProduct() {
    const listProduct = useSelector(state=>state.listProduct);
    // console.log(listProduct);
    let elementListProduct = listProduct.map((product)=>{
        return <Product product = {product} key={product.productId} />
    })
  return (
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <div className="panel panel-primary">
              <div className="panel-heading">
                  <h1 className="panel-title">List Products</h1>
              </div>
              <div className="panel-body" id="list-product">
                  {/* PRODUCT : START */}
                  {elementListProduct}
                  {/* PRODUCT : END */}
                 
              </div>
          </div>
      </div>
  )
}

export default ListProduct