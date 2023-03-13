import React, { Component } from 'react';

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'All'
                },
                {
                    key: 'Indian',
                    name: 'Indian'
                },
                {
                    key: 'Triumph',
                    name: 'Triumph'
                },
                {
                    key: 'Moto Guzzi',
                    name: 'Moto Guzzi'
                }
            ]
        }
    }

  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories