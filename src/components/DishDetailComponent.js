import React from 'react';
import { Card, CardImg, CardText, CardTitle, CardBody } from 'reactstrap';


function RenderDish({ dish }) {
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

function RenderComments({ comments }) {
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
          {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
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

const DishDetail = (props) => {
  const dish = this.props.dish;
  if (dish == null) {
    return (<div></div>)
  }
  const dishItem = <RenderDish dish={props.dish} />
  const cmts = <RenderComments comments={props.dish.comments} />
  return (
    <div className='container'>
      <div className='row'>
        {dishItem}
        {cmts}
      </div>
    </div>
  );
}


export default DishDetail;