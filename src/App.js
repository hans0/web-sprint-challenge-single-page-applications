import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';
import Header from './components/Header';
import Home from './components/Home';
import PizzaOrderForm from './components/PizzaOrderForm';
import orderFormSchema from './validation/orderFormSchema';


const initialPizzaProperties = {
  name: '',
  size: '',
  sauce: '',
  cheeseAmount: '',
  specialInstructions: ''
}

const initialToppings = [];

const initialFormErrors = {
  name: '',
  size: '',
  sauce: '',
  cheeseAmount: '',
}

const toppingOfferings = [
  'pepperoni',
  'bellpeppers',
  'olives',
  'pineapple',
  'ham', 
  'bacon',
  'anchovies'
];

export default function App() {
  const [pizzaProperties, setPizzaProperties] = useState(initialPizzaProperties);
  const [toppings, setToppings] = useState(initialToppings);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  

  const postPizzaOrder = newPizza => {
    // this phantom api is used to register users. mildly infuriating mystery as to how I'm supposed to use it to submit pizza orders
    // not being able to submit this, coupled with a lapse in some medication, is why I'm calling this sprint early
    // hopefully, this will not be an issue in the future, when we learn how to make local Rest APIs
    axios.post(`https://reqres.in/api/register/`, newPizza)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const propertiesChange = (name, value) => {
    // validation to schema
    yup.reach(orderFormSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({...formErrors, [name]: ''})
      })
      .catch((err) => {
        setFormErrors({...formErrors, [name]: err.errors[0]})
      })
    
    setPizzaProperties({
      ...pizzaProperties, 
      [name]: value
    })
  }
  
  const pizzaSubmit = () => {
    console.log(`App.js pizzaSubmit`)
    const newPizza = {
      name: pizzaProperties.name,
      size: pizzaProperties.size,
      sauce: pizzaProperties.sauce,
      cheeseAmount: pizzaProperties.cheeseAmount,
      toppings: toppings
    }
    postPizzaOrder(newPizza);
  }

  return (
    <>
      <Header />
      <Switch>
        <Route path='/pizza'>
          {/* {console.log(`App.js`, pizzaProperties.cheeseAmount)} */}
          <PizzaOrderForm 
            pizzaProperties={pizzaProperties} 
            toppings={toppings}
            setToppings={setToppings}
            propertiesChange={propertiesChange}
            formErrors={formErrors}
            toppingOfferings={toppingOfferings}
            pizzaSubmit={pizzaSubmit}
          />
        </Route>
        <Route path='/'>
          <Home /> 
        </Route>
      </Switch>
    </>
  );
};
