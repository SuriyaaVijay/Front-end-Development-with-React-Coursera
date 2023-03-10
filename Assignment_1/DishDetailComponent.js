import React, { Component } from 'react';
import { Card, CardImg, CardText, CardTitle, CardBody } from 'reactstrap';

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDishDetail: this.props.DishDetail
    };
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle><h2>{dish.name}</h2></CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    }
    else {
      return (
        <div></div>
      );
    }
  }

  renderComments(comments) {
    if (comments == null) {
      return (
        <div></div>
      );
    }
    const cmt = comments.map(comment => {
      return (
        <li key={comment.id}>
          <p>{comment.comment}</p>
          <p>-- {comment.author},
            &nbsp;
            {new Intl.DateTimeFormat('en-US', {
              year: 'numeric',
              month: 'long',
              day: '2-digit'
            }).format(new Date(comment.date))}
          </p>
        </li>
      )
    })

    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className='list-unstyled'>
          {cmt}
        </ul>
      </div>
    );
  }

  render() {
    const dish = this.props.dish;
    if (dish == null) {
      return (<div></div>)
    }
    const dishItem = this.renderDish(dish);
    const cmts = this.renderComments(dish.comments);
    return (
      <div className='row'>
        {dishItem}
        {cmts}
      </div>
    );
  }
}

export default DishDetail;