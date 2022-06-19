// import redux from 'redux'
import { createLogger } from 'redux-logger';
const redux = require('redux')
const createStore =redux.createStore
const combineReducers=redux.combineReducers
// const applyMiddleware=redux.applyMiddleware
// /const reduxLogger=requre('redux-logger')
// const logger=reduxLogger.createLogger()
const BUY_CAKE='BUY_CAKE';
const BUY_IceCream='BUY_IceCream';

function buyCake(){
  return{
type: BUY_CAKE,
info:'first redux action',
}
}
function buyIceCream(){
  return{
    type:BUY_IceCream,
   
}
}
//(previousState,action)=>newState
// const initialState={
//   numOfCakes:10,
//   numOfIcecreams:20
// }
const initialCakeState={
  numOfCakes:10,
}
const initialIceCreamState={
  numOfIceCreams:20,
}
// const reducer=(state = initialState, action)=>{
//    switch(action.type){
//     case BUY_CAKE:return{
//       ...state,numOfCakes:state.numOfCakes-1 
//     }
//     case BUY_IceCream:return{
//       ...state,numOfIcecreams:state.numOfIcecreams-1 
//     }

//     default : return state
//     }
   
//    }
   const Cakereducer=(state = initialCakeState, action)=>{
    switch(action.type){
     case BUY_CAKE:return{
       ...state,numOfCakes:state.numOfCakes-1,
     }
 
     default : return state
     }
    
    }
    const IceCreamreducer=(state = initialIceCreamState, action)=>{
      switch(action.type){
       case BUY_IceCream:return{
         ...state,numOfIceCreams:state.numOfIceCreams-1 
       }
       
   
       default : return state
       }
      
      }
      const rootReducer=combineReducers({
        cake:Cakereducer,
        IceCream:IceCreamreducer,

      })
const store=createStore(rootReducer)
console.log('initial state',store.getState())
const unsubscribe = store.subscribe(()=>console.log('updated state',store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()
  