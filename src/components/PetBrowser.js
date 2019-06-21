import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const petCards = this.props.pets.map((pet, index) => {
      <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} key={index}/>

    });

    return
    <div className="ui cards">
      {petCards}
    </div>
  }
}

export default PetBrowser
