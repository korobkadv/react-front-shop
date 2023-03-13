import React, { Component } from 'react';
import { FaTrashAlt } from "react-icons/fa";

export class Order extends Component {
  render() {
    return (
      <div className='item'>
        <img src={"./img/moto/" + this.props.item.img} alt='no img' />
        <h2>{this.props.item.title}</h2>
        <b>{new Intl.NumberFormat('ru-RU').format(this.props.item.price)} $</b>
        <FaTrashAlt className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)} />
      </div>
    )
  }
}

export default Order