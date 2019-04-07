import React from 'react'
import { Row, Col, Container  } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Recipes = props => (
  <Container>
    <Row>
      {
        props.recipes.map( (item, index) => {
          return (
            <Col  xs={4} className="printBlock" key={index}>
                <img src={item.image_url} alt={item.title}className="printImg"/>
                <h3 className="titleForRecipe">
                  {
                    item.title.length < 20 ? `${item.title}` :
                    `${item.title.substring(0,25)}...`
                  }
                </h3>
                <h6>Publisher : {item.publisher}</h6>
                <button className="newBlockBtn">
                <Link className="linkToResipe"to={{
                  pathname: `/recipe/${item.recipe_id}`,
                  state: {item: item.title}
                }}>View Recipe</Link>
                </button>
            </Col>
          )
        })
      }
    </Row>
  </Container>
)
export default Recipes
