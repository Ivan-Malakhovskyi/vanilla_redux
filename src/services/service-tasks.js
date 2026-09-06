import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

export const getTasks = async () => {
  const { data } = await axios.get("/tasks");
  return data;
};

export const getFilter = async () => {
  const { data } = await axios.get("/filters");
  return data;
};
