import ReactDOM from "react-dom/client";

jest.mock("react-dom/client", () => ({
  createRoot: jest.fn(() => ({
    render: jest.fn(),
  })),
}));

describe("index.tsx", () => {
  it("calls ReactDOM.createRoot and renders the app", () => {
    const mockCreateRoot = ReactDOM.createRoot as jest.Mock;
    const mockRender = jest.fn();

    mockCreateRoot.mockReturnValueOnce({ render: mockRender });

    require("../index.tsx");

    expect(mockCreateRoot).toHaveBeenCalledWith(
      document.getElementById("root")
    );
    expect(mockRender).toHaveBeenCalledTimes(1);
  });
});
