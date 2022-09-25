import axios from "axios";

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwt");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axios.interceptors.response.use((response) => response, (error) => {
  if (error.response.status === 403 || error.response.status === 401) {
    localStorage.removeItem("jwt");
    localStorage.removeItem("user-id");
    window.location.href = "/login";
  }
  return error;
});


export default axios;
