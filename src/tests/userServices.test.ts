import axios from "axios";
import {
  fetchUserDataService,
  updateUserPasswordService,
  createUserService,
  deleteUserService,
} from "../service/userService";
import { CreateUserData, UpdatePasswordProps } from "../types/usertypes";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("API Service Tests", () => {
  const baseURL = "http://localhost:4000";
  const mockResponse = { data: { success: true } };

  beforeEach(() => {
    mockedAxios.create.mockReturnValue(mockedAxios);
  });

  it("should call fetchUserDataService with the correct URL", async () => {
    const userName = "testUser";
    mockedAxios.get.mockResolvedValue(mockResponse);

    const result = await fetchUserDataService(userName);

    expect(mockedAxios.get).toHaveBeenCalledWith(
      `${baseURL}/users/fetch-details/${userName}`
    );
    expect(result).toEqual(mockResponse);
  });

  it("should call updateUserPasswordService with the correct payload", async () => {
    const updatePasswordData: UpdatePasswordProps = {
      userMail: "test@example.com",
      password: "newPassword123",
    };
    mockedAxios.put.mockResolvedValue(mockResponse);

    const result = await updateUserPasswordService(updatePasswordData);

    expect(mockedAxios.put).toHaveBeenCalledWith(
      `${baseURL}/users/update-password`,
      {
        userMail: "test@example.com",
        password: "newPassword123",
      }
    );
    expect(result).toEqual(mockResponse);
  });

  it("should call createUserService with the correct payload", async () => {
    const createUserData: CreateUserData = {
      userName: "newUser",
      fullName: "New User",
      email: "newuser@example.com",
      password: "password123",
    };
    mockedAxios.post.mockResolvedValue(mockResponse);

    const result = await createUserService(createUserData);

    expect(mockedAxios.post).toHaveBeenCalledWith(
      `${baseURL}/users/create-user`,
      {
        userName: "newUser",
        fullName: "New User",
        email: "newuser@example.com",
        password: "password123",
      }
    );
    expect(result).toEqual(mockResponse);
  });

  it("should call deleteUserService with the correct URL", async () => {
    const userName = "testUser";
    mockedAxios.delete.mockResolvedValue(mockResponse);

    const result = await deleteUserService(userName);

    expect(mockedAxios.delete).toHaveBeenCalledWith(
      `${baseURL}/users//delete-user/${userName}`
    );
    expect(result).toEqual(mockResponse);
  });
});
