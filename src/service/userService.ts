import axios from "axios";
import { CreateUserData, UpdatePasswordProps } from "../types/usertypes";

const api = axios.create({ baseURL: "http://localhost:4000" });

export const fetchUserDataService = async (
  userName?: string
): Promise<object> => {
  const url = `/users/fetch-details/${userName}`;
  const response = await api.get(url);
  return response;
};

export const updateUserPasswordService = async ({
  userMail,
  password,
}: UpdatePasswordProps) => {
  const url = "/users/update-password";
  const response = await api.put(url, { userMail, password });
  return response;
};

export const createUserService = async (userData?: CreateUserData) => {
  const { userName, fullName, email, password } = userData as CreateUserData;
  const url = "/users/create-user";
  const response = await api.post(url, { userName, fullName, email, password });
  return response;
};

export const deleteUserService = async (userName?: string) => {
  const url = `/users//delete-user/${userName}`;
  const response = await api.delete(url);
  return response;
};
