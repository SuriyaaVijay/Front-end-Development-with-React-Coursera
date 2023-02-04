import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import { Routes, Route, Navigate} from 'react-router-dom';
import { connect } from 'react-redux';

import { useNavigate } from 'react-router';

const withRouter = (Component) =>{
    const Wrapper = (props) =>{
        const history = useNavigate();
        return <Component history={history} {...props}/>
    } 
    return Wrapper;
}
const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

class Main extends Component {

  
  render() {

    const MenU = () => {
     return(
      <Menu dishes = {this.props.dishes} />
     ); 
    }
    const HomePage = () => {
      return(
          <Home 
              dish={this.props.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }

    const Aboutus = () => {
      return(
        <About leaders={this.props.leaders} />
      )
    }
    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };
    return (
      <div>
        <Header />
        <Routes>
        
          <Route path='/home' exact element={<HomePage/>} />
          <Route path='/menu' exact element={<MenU/>} />
          <Route path='/contactus' exact element={<Contact/>}/>
          <Route path='/aboutus' exact element={<Aboutus/>}/>
          <Route path='/home' exact element={<Navigate replace to="/home" /> } /> 
          <Route path='/menu/:dishId' exact element={DishWithId} />                                                     
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));