import React from 'react'

class Filters extends React.Component {

  selection = (event) => {
    // event.preventDefault();
    this.props.onChangeType(event.target.value)
  }

  finding = (e) => {
    // e.preventDefault();
    this.props.onFindPetsClick()
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select onChange={this.selection} name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.finding} >Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
