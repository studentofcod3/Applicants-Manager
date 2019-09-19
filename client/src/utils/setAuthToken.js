import axios from "axios";

// This is a function we will use to check if we have a token and set it as a default header. remember we called it x-auth-token in the backend
const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};

export default setAuthToken;
