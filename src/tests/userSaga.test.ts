import { userReducer } from "../reducers/userReducer";
import { UserTypes } from "../actions/actionTypes";
import { CreateUserData, UserTypesReducer } from "../types/usertypes";

describe("userReducer", () => {
  const initialState: UserTypesReducer = {
    passwordSuccessMsg: "",
    createUserSuccessMsg: "",
    userDeletedMsg: "",
    error: "",
    userData: {} as CreateUserData,
  };

  it("should return the initial state when an unknown action is passed", () => {
    const action = { type: "UNKNOWN_ACTION" };
    const newState = userReducer(undefined, action);
    expect(newState).toEqual(initialState);
  });

  it("should not mutate the initial state", () => {
    const action = {
      type: UserTypes.SUCCESS_FETCH_USER_DETAILS,
      userData: { id: 1, name: "John Doe" },
    };
    const newState = userReducer(initialState, action);
    expect(initialState).not.toBe(newState);
  });

  it("should handle SUCCESS_FETCH_USER_DETAILS", () => {
    const action = {
      type: UserTypes.SUCCESS_FETCH_USER_DETAILS,
      userData: { id: 1, name: "John Doe" },
    };
    const newState = userReducer(initialState, action);
    expect(newState.userData).toEqual(action.userData);
  });

  it("should handle FAILURE_FETCH_USER_DETAILS", () => {
    const action = {
      type: UserTypes.FAILURE_FETCH_USER_DETAILS,
      error: "Failed to fetch user details",
    };
    const newState = userReducer(initialState, action);
    expect(newState.error).toBe(action.error);
  });

  it("should handle SUCCESS_UPDATE_USER_DATA", () => {
    const action = {
      type: UserTypes.SUCCESS_UPDATE_USER_DATA,
      passwordSuccessMsg: "Password updated successfully",
    };
    const newState = userReducer(initialState, action);
    expect(newState.passwordSuccessMsg).toBe(action.passwordSuccessMsg);
  });

  it("should handle FAILURE_UPDATE_USER_DATA", () => {
    const action = {
      type: UserTypes.FAILURE_UPDATE_USER_DATA,
      error: "Failed to update user data",
    };
    const newState = userReducer(initialState, action);
    expect(newState.error).toBe(action.error);
  });

  it("should handle SUCCESS_CREATE_USER_DETAILS", () => {
    const action = {
      type: UserTypes.SUCCESS_CREATE_USER_DETAILS,
      createUserSuccessMsg: "User created successfully",
    };
    const newState = userReducer(initialState, action);
    expect(newState.createUserSuccessMsg).toBe(action.createUserSuccessMsg);
  });

  it("should handle FAILURE_CREATE_USER_DETAILS", () => {
    const action = {
      type: UserTypes.FAILURE_CREATE_USER_DETAILS,
      error: "Failed to create user",
    };
    const newState = userReducer(initialState, action);
    expect(newState.error).toBe(action.error);
  });

  it("should handle SUCCESS_DELETE_USER_DETAILS", () => {
    const action = {
      type: UserTypes.SUCCESS_DELETE_USER_DETAILS,
      userDeletedMsg: "User deleted successfully",
    };
    const newState = userReducer(initialState, action);
    expect(newState.userDeletedMsg).toBe(action.userDeletedMsg);
  });

  it("should handle FAILURE_DELETE_USER_DETAILS", () => {
    const action = {
      type: UserTypes.FAILURE_DELETE_USER_DETAILS,
      error: "Failed to delete user",
    };
    const newState = userReducer(initialState, action);
    expect(newState.error).toBe(action.error);
  });

  it("should handle empty payload gracefully for SUCCESS_FETCH_USER_DETAILS", () => {
    const action = { type: UserTypes.SUCCESS_FETCH_USER_DETAILS };
    const newState = userReducer(initialState, action);
    expect(newState.userData).toEqual({});
  });
});
