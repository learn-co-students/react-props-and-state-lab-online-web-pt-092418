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
        type: ptype
      }
    })
  }

  onFindPetsClick = () => {
    let petType = this.state.filters.type
    // debugger
    if (petType === 'all') {
      fetch("/api/pets")
      .then(res => res.json())
      .then(resp => {
        this.setState({pets: resp})
      })
    } else if (petType === 'cat'){
      fetch("/api/pets?type=cat")
      .then(res => res.json())
      .then(resp => {
        this.setState({pets: resp})})
    } else if (petType === 'dog') {
      fetch("/api/pets?type=dog")
      .then(res => res.json())
      .then(resp => {this.setState({pets: resp})})
    } else if (petType === 'micropig') {
      fetch("/api/pets?type=micropig")
      .then(res => res.json())
      .then(resp => {this.setState({pets: resp})})
    }
  }

  onAdoptPet = (id) =>{
    const  listPets = this.state.pets.map(pet => {
      if(pet.id === id) {
        pet.isAdopted = true;
        return pet
      }
    })
    this.setState({pets: listPets});
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
