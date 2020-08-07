import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
  constructor(){
    super();
    this.state = {
      item_image:'',
      item_name: '',
      price:0.0
    }
  }

  addItems = () => {
    const { item_image, item_name, price } = this.state;
    axios.post('/api/product', { item_image, item_name, price }).then( () => {
      this.setState({
        item_image:'',
        item_name:'',
        price:0.0
      });
      // this.props.history.push('/dashboard')
    })
  }

  cancel = _ => {
  const {item_image, item_name, price} = this.state;
    this.setState({
      item_image: '',
      item_name: '',
      price: 0.0
    });
}

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  

  render() {
      return (
        <div>
          <h1>Form</h1>
          
          <div>Image Preview</div>
          
          <h3>Image URL:</h3>
          <input
            onChange={(e) => this.handleChange(e)}
            name='item_image'
            type="url"
            placeholder='image URL here'
            value={this.state.item_image}
          />
          
          <h3>Product Name:</h3>
          <input 
            onChange={(e) => this.handleChange(e)}
            name='item_name'
            type='text'
            value={this.state.item_name}
          />

          <h3>Price:</h3>
          <input 
            onChange={(e) => this.handleChange(e)}
            name='price'
            type='number' min="0.00" step="0.01"
            value={this.state.price}
          />
          
          <button onClick={this.addItem} >Add to Inventory</button>
          <button onClick={this.cancel}>Cancel</button>

        </div>
      )
    }
  }