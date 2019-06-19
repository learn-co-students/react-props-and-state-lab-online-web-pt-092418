import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (ptype) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: ptype
      }
    })
  }

  onFindPetsClick = (p) => {
    let petType = this.state.filters.type
    if (petType === 'all') {
      fetch("/api/pets")
      .then(res => this.state.pets = res)
    } else if (petType === 'cat'){
      fetch("/api/pets?type=cat")
      .then(res => this.state.pets = res)
    } else if (petType === 'micropig') {
      fetch("/api/pets?type=micropig")
      .then(res => this.state.pets = res)
    }
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters petType={this.onChangeType} petFind={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
