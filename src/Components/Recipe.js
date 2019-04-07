import React, {Component} from 'react'
import { Link } from 'react-router-dom'

const API_KEY = '9b0a4f20b9cbe7b2d12eab67108c174d'

export default class Recipe extends Component{
  state = {
   activeRecipe: []
  }
  componentDidMount = async () => {
    const title = this.props.location.state.item;
    const req = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`);

    const res = await req.json()

    this.setState({
      activeRecipe: res.recipes[0]
    })
    console.log(this.state.activeRecipe)
    console.log(res)
  }

  render(){
    const recipe = this.state.activeRecipe
   return(
     <div className="printRecipe">
      {
        this.state.activeRecipe.length !== 0 &&
        <div>
          <img src={recipe.image_url} alt={recipe.title}/>
          <h3 className="titleForRecipe">{recipe.title}</h3>
          <h4>Publisher: {recipe.publisher}</h4>
          <h4>Website: {recipe.publisher_url}</h4>
          <button className="newBlockBtn">
            <Link className="linkToResipe" to='/'>
              Go Home
            </Link>
           </button>
        </div>
      }
    </div>
   )
 }
}
