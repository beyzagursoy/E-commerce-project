import { API } from '../../api/api';
import { toast } from 'react-toastify';
// 1. Temel Action Creator
export const setUser = (user) => ({ type: "SET_USER", payload: user });
export const setRoles = (roles) => ({ type: "SET_ROLES", payload: roles });
export const setTheme = (theme) => ({ type: "SET_THEME", payload: theme });
export const setLanguage = (lang) => ({ type: "SET_LANGUAGE", payload: lang });

// 2. Roles Thunk Action 
export const fetchRoles = () => (dispatch, getState) => {
  const { roles } = getState().client;

  if (roles.length === 0) {
    API.get('/roles')
      .then(res => {
        dispatch(setRoles(res.data));
      })
      .catch(err => {
        console.error("Roles fetch error:", err);
      });
  }
};

// 3. Login Thunk Action
export const loginUser = (credentials, history, rememberMe) => (dispatch) => {
  return API.post('/login', credentials)
    .then(res => {
      const user = res.data;
      dispatch(setUser(user));

      if (rememberMe) {
        localStorage.setItem("token", user.token);
      } else {
        localStorage.removeItem("token");
      }

      toast.success(`Welcome back, ${user.name}!`);

      if (history.length > 2) {
        history.goBack();
      } else {
        history.push("/");
      }
    })
    .catch(err => {
      toast.error("Login failed!");
      console.error(err);
    });
};