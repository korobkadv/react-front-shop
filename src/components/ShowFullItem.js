import React, { Component } from 'react';

export class ShowFullItem extends Component {
    render() {
        return (
            <div className='full-item'>
                <div className='block-button-back'>
                    <div className='come-back-button' onClick={() => this.props.onShowItem(this.props.item)}>  <span> &#171; Come back </span></div>
                </div>
                <div className='full-item-media'>
                    <img src={"./img/moto/" + this.props.item.img} alt='no img' />
                    <div className='video'>
                        <b> Watch a video: </b>
                        <a href={this.props.item.urlVideo} target="_blank" rel="noreferrer">
                         {this.props.item.title}
                        </a>
                    </div>
                </div>

                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.desc}</p>
                <b>{new Intl.NumberFormat('ru-RU').format(this.props.item.price)} $</b>

                <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>Buy</div>

                <div className='allDesc'>
                    <ul>
                        {this.props.item.allDesc.map(el => (
                            <li key={el.id}>{el.text}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default ShowFullItem