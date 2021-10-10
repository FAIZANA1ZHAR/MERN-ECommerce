import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import productScreen from './productScreen'

import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productAction'

const HomeScreen = () => {
  const productList = useSelector((state) => {
    console.log('HomeScreen', state)
    return state.productList
  })

  console.log('the productlist', productList)
  const { products, loading, error } = productList
  // const [products, setProduct] = useState([])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listProducts())

    return () => {}
  }, [])

  return loading ? (
    <div>loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <ul className='products'>
      {products.map((products) => (
        <li key={products._id}>
          <div className='product'>
            <Link to={'/product/' + products._id}>
              <img
                className='product-image'
                src={products.image}
                alt='product'
              />
            </Link>
            <div className='product-name'>
              <Link to={'/product/' + products._id}>{products.name}</Link>
            </div>
            <div className='product-brand'>{products.brand}</div>
            <div className='product-price'>${products.price}</div>
            <div className='product-rating'>
              {products.rating} Stars ({products.numRivews})
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default HomeScreen
