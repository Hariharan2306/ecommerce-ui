import { UserTypes } from "./actionTypes";

export const fetchUserDetails = (userName: String) => ({
  type: UserTypes.FETCH_USER_DETAILS,
  userName,
});
export const requestFetchUserDetails = () => ({
  type: UserTypes.REQUEST_USER_DETAILS,
});
export const successFetchUserDetails = (userData: any) => ({
  type: UserTypes.SUCCESS_USER_DETAILS,
  userData,
});
export const failureFetchUserDetails = (error: Error) => ({
  type: UserTypes.FAILURE_USER_DETAILS,
  error: error.message,
});
