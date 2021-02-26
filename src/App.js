import React, { useDebugValue, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';
import Header from './components/Header';
import Home from './components/Home';
import PizzaOrderForm from './components/PizzaOrderForm';
import orderFormSchema from './validation/orderFormSchema';


const initialPizzaProperties = {
  size: '',
  sauce: '',
  cheeseAmount: '',
}

const initialToppings = [];

const initialFormErrors = {
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
          />
        </Route>
        <Route path='/'>
          <Home /> 
        </Route>
      </Switch>
    </>
  );
};
