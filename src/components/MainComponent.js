import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Routes, Route, Navigate } from 'react-router-dom';
import { DISHES } from '../shared/dishes';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }

  render() {
    const HomePage = () => {
      return (
        <Home
        />
      );
    }

    const MenU = () => {
     return(
      <Menu dishes = {this.state.dishes} />
     ); 
    }

    return (
      <div>
        <Header />
        <Routes>
        
          <Route path='/home' exact element={<HomePage/>} />
          <Route path='/menu' exact element={<MenU/>} />
          <Route path='/home' element={<Navigate replace to="/home" /> } /> 
          
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default Main;