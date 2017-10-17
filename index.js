const Redux = require('redux');

const a = (state = 0, action)=>{


    if(action.type === 1){
        return action.payload;
    }else{
        return state;
    }
}

const store = Redux.createStore(a);

const action = {
    type: 1,
    payload: 'Hello Redux'
}

store.dispatch(action)

console.log(store.getState())

