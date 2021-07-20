import axios from "axios";

const api = axios.create({
  baseURL: "https://processo-seletivo-hut8.herokuapp.com",
});

export default api;