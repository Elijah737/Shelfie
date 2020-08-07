import React, { Component } from 'react';
import axios from 'axios'
import Product from '../Product/Product'

export default class Dashboard extends React.Component {
  state = {
    items:[]
  }

  getItems = () => {
    axios.get('/api/inventory').then(res => {
      this.setState({
        items: res.data
      })
    })
  }


    render() {
      console.log(this.state.items)

      const newItems = this.state.items.map((el, i) => (
        <Product key={i} data={el}/>
      ))
      
      return (
        <div>
          <h1>Dashboard</h1>
          {newItems}
          
        </div>
      )
    }
  }