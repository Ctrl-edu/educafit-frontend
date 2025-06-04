import axios from 'axios'; // libreria para hacer peticiones http 
const API_BASE_URL = "http://localhost:8080/api";


export const login = (credentials) => {
  return axios.post(`${API_BASE_URL}/usuario/login`, credentials);
};


export const register = (userData) => {
  return axios.post(`${API_BASE_URL}/usuario/registroUsuario`, userData);
};


export const actualizarUsuario = (correo, userData) => {
  return axios.put(`${API_BASE_URL}/usuario/actualizarUsuario/${correo}`, userData);
}

export const eliminarUsuario = (correo) => {
  return axios.delete(`${API_BASE_URL}/usuario/eliminarUsuario/${correo}`);
}