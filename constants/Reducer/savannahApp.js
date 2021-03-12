export const SAVE_USER = 'SAVE_USER';
export const LOGOUT = 'LOGOUT';

let itemID = 0;

//Action

export function saveUser(user) {
  return {
    type: SAVE_USER,
    payload: user,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

//Reducers
const initialState = {
  items: [],
};

function itemsReducer(state = initialState, action) {
  console.log(action, 'action ...');
  switch (action.type) {
    case SAVE_USER:
      console.log(' user added');
      state.users.push(action.payload);
      return state;
  }
}

export default itemsReducer;
