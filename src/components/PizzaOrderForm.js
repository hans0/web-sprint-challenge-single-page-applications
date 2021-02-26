import React from 'react';
import './PizzaOrderForm.css';

export default function PizzaOrderForm(props) {
  const {
    pizzaProperties,
    propertiesChange, 
    toppings, 
    setToppings,
    formErrors,
    toppingOfferings
  } = props;

  const onChange = evt => {
    const { name, value, type } = evt.target;
    if (type === 'checkbox') {
      var array = [...toppings];
      var index = array.indexOf(name);
      if (index !== -1){
        array.splice(index, 1);
        setToppings(array);
      } else {
        setToppings([...toppings, name]);
      }
      return; // to leave after adding/subtracting topping
    } 
    propertiesChange(name, value);
  }

  return (


    <div className='form container'>
      Pizza Order Form
      {console.log('POF.js', pizzaProperties, toppings)}
      {/* {props.toppings}
      {props.formErrors} */}
      <br />
      <label>Size
        <select
          onChange={onChange}
          value={pizzaProperties.size}
          name='size'
        >
          <option value=''>--- select size ---</option>
          <option value='small'>Small</option>
          <option value='medium'>Medium</option>
          <option value='large'>Large</option>

        </select>
      </label>
      <br />
      <label>Cheese
        <select 
          onChange={onChange}
          value={pizzaProperties.cheeseAmount}
          name='cheeseAmount'
          >
          <option value=''>--- select amount ---</option>
          <option value='normal'>Normal</option>
          <option value='light'>Light</option>
          <option value='extra'>Extra</option>
        </select>
      </label>
      <br />
      <label>Sauce
        <select
          onChange={onChange}
          value={pizzaProperties.sauce}
          name='sauce'
        >
          <option value=''>--- select sauce ---</option>
          <option value='tomato'>Tomato</option>
          <option value='bbq'>BBQ</option>
          <option value='buffalo'>Buffalo</option>

        </select>
        </label>
        <br />
        {toppingOfferings.map(topping => {
          return (
            <label key={topping}>
            <input
              type='checkbox'
              name={topping}
              onChange={onChange}
              // checked={false}
            />
            {topping}</label>
          )
        })}
        <button>submit</button>
        <div className="errors">
          <div>{formErrors.size}</div>
          <div>{formErrors.sauce}</div>
          <div>{formErrors.cheeseAmount}</div>
        </div>
    </div>
  )
}