import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
});

export const fetchUserDataService = async () => {
  // sample
  //   `/history?search=${search}&period=${period}`;
  const response = await api.get("");
  return response;
};
