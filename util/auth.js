import axios from "axios";
import Constants from "expo-constants";

const API_KEY = Constants.expoConfig.extra.firebaseApiKey;

const BASE_AUTH_URL = "https://identitytoolkit.googleapis.com/v1/accounts:";

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
