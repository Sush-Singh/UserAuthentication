import axios from "axios";

const API_KEY = "AIzaSyCD5COFj6MzNbihm_t8qyjeC7OQneEdF38";
const BASE_AUTH_URL = "https://identitytoolkit.googleapis.com/v1/accounts:";
const SIGNUP_LINK = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
const SIGNIN_LINK = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

async function authentication(mode, email, password) {
  const URL = `${BASE_AUTH_URL}${mode}?key=${API_KEY}`;
  const response = await axios.post(URL, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  const token = response.data.idToken;
  return token;
}

export function createUser(email, password) {
  return authentication("signUp", email, password);
}

export function login(email, password) {
  return authentication("signInWithPassword", email, password);
}
