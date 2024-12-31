import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import App from "../App";

jest.mock("./components/Home", () => () => <div>Home Component</div>);

describe("App Component", () => {
  it("should render the fallback while loading lazy components", () => {
    render(
      <MemoryRouter initialEntries={["/home"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("should render the Home component when on the /home route", async () => {
    render(
      <MemoryRouter initialEntries={["/home"]}>
        <App />
      </MemoryRouter>
    );

    const homeElement = await screen.findByText("Home Component");
    expect(homeElement).toBeInTheDocument();
  });
});
