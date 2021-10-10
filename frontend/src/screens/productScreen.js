import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { detailsProduct } from '../actions/productAction'

const ProductScreen = (props) => {
  // const product = data.products.find((x) => x._id == props.match.params.id)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id))

    return () => {}
  }, [])

  const productDetails = useSelector((state) => {
    console.log('this is the state', state)
    return state.productDetails
  })

  const { product, loading, error } = productDetails

  return (
    <div className='back-to-result'>
      <div>
        <Link to='/'> Back to home page</Link>
      </div>

      <div className='details'>
        <div className='details-image'>
          <img src={product.image} alt='product' />
        </div>

        <div className='details-info'>
          <ul>
            <li>
              <h4> {product.name}</h4>
            </li>
            <li>
              {product.rating} Stars({product.numRivews} Rivews )
            </li>

            <li>
              Price: $<b> {product.price}</b>
            </li>
            <li>
              Description:
              {product.description}
            </li>
          </ul>
        </div>
        <div className='details-action'>
          <ul>
            <li>Price:$ {product.price}</li>
          </ul>
          <ul>
            <li>Status:{product.status}dfsfasdfasdfas</li>
          </ul>
          <ul>
            <li>
              QTY:{' '}
              <select name='' id=''>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </li>
            <li>
              <button className='button'>Add to cart</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProductScreen
