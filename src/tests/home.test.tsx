import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit"; // Use configureStore here
import Home from "../components/Home";

jest.mock("../assets/easyPlugIn.png", () => "/mock/easyPlugIn.png");

describe("Home Component", () => {
  it("renders EndSale component", () => {
    const store = configureStore({ reducer: {} });

    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const endSaleComponent = screen.getByTestId("end-sale");
    expect(endSaleComponent).toBeInTheDocument();
  });

  it("renders the AutoSlider and image correctly", () => {
    const store = configureStore({ reducer: {} });

    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const image = screen.getByAltText("Easy Plug in Img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/mock/easyPlugIn.png");

    const autoSlider = screen.getByTestId("auto-slider");
    expect(autoSlider).toBeInTheDocument();
  });

  it("dispatches fetchUserDetails action on component mount", () => {
    const fetchUserDetailsMock = jest.fn();
    const store = configureStore({
      reducer: {
        fetchUserDetails: fetchUserDetailsMock,
      },
    });

    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(fetchUserDetailsMock).toHaveBeenCalledTimes(0);
  });
});
