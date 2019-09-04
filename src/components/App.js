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

  onChangeType = (event) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: event.currentTarget.value
      }
    });
  }

  onFindPetsClick = (event) => {
    let params = "";
    if (this.state.filters.type !== "all") {
      params = `?type=${this.state.filters.type}`
    }

    let url = (`/api/pets${params}`);
      fetch(url)
        .then(response => response.json())
        .then((result) => {
          this.setState({pets: result}
      )
    })
  };

  onAdoptPet = pId => {
    const pets = this.state.pets.map(p => {
      return p.id === pId ? { ...p, isAdopted: true } : p;
    });
    this.setState({ pets });
  };


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
