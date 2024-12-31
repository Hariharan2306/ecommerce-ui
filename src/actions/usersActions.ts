import { CreateUserData, UpdatePasswordProps } from "../types/usertypes";
import { UserTypes } from "./actionTypes";

export const fetchUserDetails = (userName: String) => ({
  type: UserTypes.FETCH_USER_DETAILS,
  userName,
});
export const requestFetchUserDetails = () => ({
  type: UserTypes.REQUEST_FETCH_USER_DETAILS,
});
export const successFetchUserDetails = (userData: CreateUserData) => ({
  type: UserTypes.SUCCESS_FETCH_USER_DETAILS,
  userData,
});
export const failureFetchUserDetails = (error: Error) => ({
  type: UserTypes.FAILURE_FETCH_USER_DETAILS,
  error: error.message,
});

export const updateUserPassword = (props: UpdatePasswordProps) => ({
  type: UserTypes.UPDATE_USER_DATA,
  props,
});
export const requestUserPassword = () => ({
  type: UserTypes.REQUEST_UPDATE_USER_DATA,
});
export const successUserPassword = () => ({
  type: UserTypes.SUCCESS_UPDATE_USER_DATA,
  passwordSuccessMsg: "User password updated Successfully",
});
export const failureUserPassword = (error: Error) => ({
  type: UserTypes.FAILURE_UPDATE_USER_DATA,
  error: error.message,
});

export const createUser = (props: CreateUserData) => ({
  type: UserTypes.CREATE_USER_DETAILS,
  props,
});
export const requestCreateUser = () => ({
  type: UserTypes.REQUEST_CREATE_USER_DETAILS,
});
export const successCreateUser = () => ({
  type: UserTypes.SUCCESS_CREATE_USER_DETAILS,
  createUserSuccessMsg: "User created Successfully",
});
export const failureCreateUser = (error: Error) => ({
  type: UserTypes.FAILURE_CREATE_USER_DETAILS,
  error: error.message,
});

export const deleteUser = (props: CreateUserData) => ({
  type: UserTypes.DELETE_USER_DETAILS,
  props,
});
export const requestDeleteUser = () => ({
  type: UserTypes.REQUEST_DELETE_USER_DETAILS,
});
export const successDeleteUser = () => ({
  type: UserTypes.SUCCESS_DELETE_USER_DETAILS,
  userDeletedMsg: "User Deleted Successfully",
});
export const failureDeleteUser = (error: Error) => ({
  type: UserTypes.FAILURE_DELETE_USER_DETAILS,
  error: error.message,
});
