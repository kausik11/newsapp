import React, { Component } from 'react'
import loading from './loader.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center' >
        <img src={loading} alt='loading' style={{width: "40px"}}></img>
      </div>
    )
  }
}
