import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { Routes, Route, Navigate } from 'react-router-dom';
import { DISHES } from '../shared/dishes';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }

  render() {

    const MenU = () => {
     return(
      <Menu dishes = {this.state.dishes} />
     ); 
    }

    const HomePage = () => {
      return(
          <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }

    return (
      <div>
        <Header />
        <Routes>
        
          <Route path='/home' exact element={<HomePage/>} />
          <Route path='/menu' exact element={<MenU/>} />
          <Route path='/contactus' exact element={<Contact/>}/>
          <Route path='/home' element={<Navigate replace to="/home" /> } /> 
          
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default Main;