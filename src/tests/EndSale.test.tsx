import { render, screen, fireEvent } from "@testing-library/react";
import EndSale from "../components/EndSale";
import { logosAndLabels, subHeaderLinkLabels } from "../config/constants";

jest.mock("../assets/logo.png", () => "/mock/logo.png");
jest.mock("../assets/yearEndSaleImg.png", () => "/mock/yearEndSaleImg.png");

describe("EndSale Component", () => {
  it("renders the header with search, logo, and buttons", () => {
    render(<EndSale />);

    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();

    const searchField = screen.getByPlaceholderText("Search for Anything");
    expect(searchField).toBeInTheDocument();

    const emailButton = screen.getByText("Save upto 25%");
    expect(emailButton).toBeInTheDocument();

    const supportButton = screen.getByText("Support");
    expect(supportButton).toBeInTheDocument();

    const accountButton = screen.getByText("Account");
    expect(accountButton).toBeInTheDocument();

    const favouritesButton = screen.getByText("My Favourites");
    expect(favouritesButton).toBeInTheDocument();

    const cartButton = screen.getByText("Your Cart");
    expect(cartButton).toBeInTheDocument();
  });

  it("renders the subheader links", () => {
    render(<EndSale />);

    subHeaderLinkLabels.forEach((label) => {
      const link = screen.getByText(label);
      expect(link).toBeInTheDocument();
    });
  });

  it("renders the sale image and buttons", () => {
    render(<EndSale />);

    const saleImage = screen.getByAltText("sale");
    expect(saleImage).toBeInTheDocument();

    logosAndLabels.forEach(({ label }) => {
      const shopButton = screen.getByText("SHOP");
      expect(shopButton).toBeInTheDocument();
    });
  });

  it("should trigger button click (example with email button)", () => {
    render(<EndSale />);

    const emailButton = screen.getByText("Save upto 25%");
    fireEvent.click(emailButton);

    expect(emailButton).toBeInTheDocument();
  });
});
