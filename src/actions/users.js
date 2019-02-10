import { FETCH_USERS_INITIATED, FETCH_USERS_SUCCESS, FETCH_USERS_FAIL } from 'UTILS/actionConstants';

export function fetchUsersInitiate() {
  return {
    type: FETCH_USERS_INITIATED,
  }
}

function fetchUsersSuccess(data) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: data,
  }
}

function fetchUsersFail(error) {
  return {
    type: FETCH_USERS_FAIL,
    payload: error,
  }
}

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersInitiate());
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => {
      response.json().then(data => {
        dispatch(fetchUsersSuccess(data));
      });
    })
    .catch((error) => {
      dispatch(fetchUsersFail(error));
    })
  }
}
