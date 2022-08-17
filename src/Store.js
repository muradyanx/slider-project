import { createStore } from "redux";


 
 const action =  {
        type: '', 
        payload: '1'
    };


const reducer = (state = {}, action) => {
    switch(action.type) {
        case "add_a_product": 
            return {
                // ...state,
                number: action.payload
            }

        default:
            return state;
    }
}


const store = createStore(reducer);


export default  store;

