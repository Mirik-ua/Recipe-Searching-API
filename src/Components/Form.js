import React, {Component} from 'react'

export default class Forms extends Component {
  render(){
    return(
      <form onSubmit={this.props.getRecipes} className="search_form">
        <input name="searchValue" className="searchInp"/>
        <button className="searchBtn">Search</button>
      </form>
    )
  }
}
