import { createStore } from 'redux';
import PostData from '../data/contacts.json';

const initialState ={
  data : PostData,
  rightPartData : PostData[0],

  name : undefined,
  contNo : undefined,
  email : undefined,
  avatar : undefined,
  deleted : undefined,

  searchBarOpen : false
}

const reducer = (state = initialState, action)=>{
  switch (action.type){
    case 'ADD_TO_STATE':
      return Object.assign({}, state, {...action.value})
    case 'SEARCH_HERE':
      return Object.assign({}, state, {searchBarOpen : true})
    default:
      return state
  }
}

const store = createStore(reducer);

export default store;