import { addManyCustomerAction } from "../reduxer/CustomerReducer"

export const fetchCustomers = () => {
    return function (dispatch) {
       fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(addManyCustomerAction(json)))
            .catch(error => {
                console.error('Error fetching customers:', error);
            });
    }
}