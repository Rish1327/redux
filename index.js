import {createStore,applyMiddleware} from "redux";
import logger from 'redux-logger';

// store
const store = createStore(reducer,applyMiddleware(logger.default));
const history =[]

function reducer  (state={amount:1},action){
    if(action.type==="increment"){
        //immutability
        return{amount:state.amount+1};
    }
return state
}
// store.subscribe(()=>{
//     history.push(store.getState())
//    console.log(history)
// })
setInterval(()=>{
   store.dispatch({type:"increment"})
 },2000)


store.dispatch({type:"increment"})
