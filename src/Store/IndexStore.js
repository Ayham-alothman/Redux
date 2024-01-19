    import {createStore,combineReducers} from 'redux'


const initState={val:0}
const ReducerCounter=(State=initState,Action)=>{
   console.log(Action)
   console.log( State)
      if(Action.type==`addtion`){return {val:State.val+Action.payload}}
      else if(Action.type==`subtraction`){ return {val:State.val+Action.payload}}
return State    
}

const Store=createStore(ReducerCounter);

export default Store;

//aa