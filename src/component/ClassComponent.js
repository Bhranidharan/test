import { click } from '@testing-library/user-event/dist/click'
import React, { Component } from 'react'

class ClassComponent extends Component {
    constructor(){
        super()
        this.state = {
            name: "Karthika",
            age: 21
        }
    }
    click() {
        this.setState({
            name: 'Bharani',
            age : 20
        })
    }
  render() {
    return (
        <>
      <div>{this.state.name}</div>
      <div>{this.state.age}</div>
      <button onClick={() => this.click()}>click me </button>
      </>
    )
  }
}
export default ClassComponent