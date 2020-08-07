import React from 'react';
// import { withRouter } from 'react-router-dom'

const Product = (props) => {
  const { image, name, price, id } = props.data;
  
      return (
        <div>
          <h1>Product</h1>

          <div className='item' onClick={() => props.history.push(`/items/${id}`)}>

            <img className='item_image' src={image} alt='Item' />

            <p>{name}</p>

            <h3>${price}</h3>

          </div>

        </div>
      )
    }
  
  export default Product;