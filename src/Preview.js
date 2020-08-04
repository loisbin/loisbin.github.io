import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Preview.css';

class Preview extends Component {

  constructor(props) {
    super(props);
    this.state = {
      font: '100%',
      color: 'black',
      display: 'block',
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  };

  handleMouseEnter = (i) => (e) => {

  };

  handleMouseLeave = (i) => (e) => {

  };

  render() {
    const {image, title, type, link, num} = this.props;
    let shadow = this.state.shadow;
    let font = this.state.font;
    let color = this.state.color;

    return (

      <div className='preview-body' onMouseEnter={this.handleMouseEnter(num)} onMouseLeave={this.handleMouseLeave(num)} style={{'fontSize': font}}>
        <Link to={'/' + link}>
          <div className='preview-wrapper'>
            <img className='preview-img' src={image} alt=''/>
          </div>
          <div className='info-wrapper'>
            <p className='title' style={{'color': color}}>{title}</p>
            <p className='description'>{type}</p>
          </div>
        </Link>
      </div>

    )

  }
}

export default Preview;
