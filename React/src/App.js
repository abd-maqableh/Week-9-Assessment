import React, { Component } from 'react'
import Inputuser from './components/input'
import Outputuser from './components/output'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>App Component</h1>
        <Inputuser />
        <Outputuser />
      </div>
    )
  }
}
