var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};

var reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCHTEXT':
      return {
        ...state,
        searchText: action.searchText
      };
    default:
      return state;
  }
};

var store = redux.createStore(reducer,window.devToolsExtension && window.devToolsExtension());

// subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('SearchText is ', state.searchText);
  document.getElementById('app').innerHTML = state.searchText;
});

console.log('currentState', store.getState());


store.dispatch({
  type: 'CHANGE_SEARCHTEXT',
  searchText: 'work'
});

store.dispatch({
  type: 'CHANGE_SEARCHTEXT',
  searchText: 'billy'
});

store.dispatch({
  type: 'CHANGE_SEARCHTEXT',
  searchText: 'home'
});

