import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const petCards = this.props.pets.map((pet, i) => {
      <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} key={i}/>

    });

    return
    <div className="ui cards">
      {petCards}
    </div>
  }
}

export default PetBrowser
