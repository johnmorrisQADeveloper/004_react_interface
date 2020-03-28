import React, { Component } from 'react'

export default class ListAppointments extends Component {
  render() {
    const listItems = this.props.myAppointments.map(item => {
      return (
        <div>{item.petName}</div>
      )
    })
    return (
      <div>
        {listItems}
      </div>
    )
  }
}
