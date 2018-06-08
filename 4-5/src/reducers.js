import { combineReducers } from 'redux';

export function todos(state={
    list: []
  }, action){
    switch(action.type) {
      case "ADD_TO_DO":
        state.list = state.list.concat(action.todo);
        return Object.assign({}, state);
      case "REMOVE_TO_DO":
        state.list = state.list.filter(todo => {
          if(action.todo != todo){
            return true;
          }else {
            return false;
          }
        });
        return Object.assign({}, state);
      default:
        return state;
    }
}

export default combineReducers({
  todos
});
