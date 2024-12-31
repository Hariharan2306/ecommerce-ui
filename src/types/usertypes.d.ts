export type CreateUserData = {
  userName: string;
  fullName: string;
  email: string;
  password: string;
};

export type UserTypesReducer = {
  passwordSuccessMsg: string;
  createUserSuccessMsg: string;
  userDeletedMsg: string;
  error: string;
  userData: CreateUserData;
};
