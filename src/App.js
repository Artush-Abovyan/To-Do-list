import './App.css'
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCustomerAction, removeCustomerAction } from './reduxer/CustomerReducer';
import { fetchCustomers } from './asyncActions/customers';

function App() {
  const counter = useSelector((state) => state.cash.counter);
  const customers = useSelector((state) => state.customers.customers);
  const dispatch = useDispatch();

  const decrement = () => {
    dispatch({ type: 'DEC' });
  };

  const increment = () => {
    dispatch({ type: 'INC' });
  };

  const addCustomer = () => {
    const name = prompt('Enter the custom name');
    if (name) {
      const customer = {
        name,
        id: Date.now(),
      };
      dispatch(addCustomerAction(customer));
    }
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addCustomer}>Add client</button>
      <button onClick={() => dispatch(fetchCustomers())}>To do clent from bass</button>
      <div>
        {customers && customers.length > 0 ? (
          customers.map((customer) => (
            <div className='customerName' key={customer.id} onClick={() => removeCustomer(customer)}>
              {customer.name}
            </div>
          ))
        ) : (
          <div>
            <h2>There are no clients!</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
