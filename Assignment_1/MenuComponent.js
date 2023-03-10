import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import DishDetail from './DishDetailComponent';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedDish: null
        }   
        console.log("Menu constructor");     
    }
    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }
    componentDidMount() {
      console.log("Menu constructor");
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                      
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });
        return(
          <div className="container">
              <div className="row">
                  { menu }
              </div>
              <DishDetail dish={this.state.selectedDish} />
          </div>
      );
    }
}


export default Menu;