import React, { Component } from 'react'

export class Item extends Component {

    
    render() {
        return ( 
            <div className='item'>
                <img src={"./img/moto/" + this.props.item.img} alt='no img' />
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.desc}</p>
                <b>{new Intl.NumberFormat('ru-RU').format(this.props.item.price)} $</b>
                <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
            </div>
        )
    }
}

export default Item