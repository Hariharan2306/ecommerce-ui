import { createSelector } from "@reduxjs/toolkit";
import get from "lodash/get";
import { RootState } from "../apis/rootReducer";

const userSelector = (state: RootState) => state.users;

export const getPasswordSuccessMsg = createSelector(userSelector, (data) =>
  get(data, "passwordSuccessMsg", "")
);
export const getCreateUserSuccessMsg = createSelector(userSelector, (data) =>
  get(data, "createUserSuccessMsg", "")
);
export const getUserDeletedMsg = createSelector(userSelector, (data) =>
  get(data, "userDeletedMsg", "")
);
export const getError = createSelector(userSelector, (data) =>
  get(data, "error", "")
);
export const getUserData = createSelector(userSelector, (data) =>
  get(data, "userData", "")
);
