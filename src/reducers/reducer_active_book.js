// State argument is not application state, only the state
// this reducer is reponsible for
// if the state is undefined, it sets state to null
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
}
