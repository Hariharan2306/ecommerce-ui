import { render, screen, act } from "@testing-library/react";
import AutoSlider from "../components/AutoSlider";

jest.mock("../assets/sliderImg1.png", () => "sliderImg1.png");
jest.mock("../assets/sliderImg2.png", () => "sliderImg2.png");

describe("AutoSlider Component", () => {
  it("should render images correctly", () => {
    render(<AutoSlider />);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(2);
    expect(images[0]).toHaveAttribute("src", "sliderImg1.png");
    expect(images[1]).toHaveAttribute("src", "sliderImg2.png");
  });

  it("should switch images every 3 seconds", () => {
    jest.useFakeTimers();

    render(<AutoSlider />);

    const images = screen.getAllByRole("img");
    expect(images[0]).toHaveAttribute("src", "sliderImg1.png");
    expect(images[1]).toHaveAttribute("src", "sliderImg2.png");

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(images[0]).toHaveStyle("transform: translateX(-100%)");
    expect(images[1]).toHaveStyle("transform: translateX(0%)");

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(images[0]).toHaveStyle("transform: translateX(0%)");
    expect(images[1]).toHaveStyle("transform: translateX(-100%)");

    jest.useRealTimers();
  });

  it("should stop the slider when unmounted", () => {
    jest.useFakeTimers();
    const { unmount } = render(<AutoSlider />);

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    unmount();

    expect(clearInterval).toHaveBeenCalled();
    jest.useRealTimers();
  });
});
