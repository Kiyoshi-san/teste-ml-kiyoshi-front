import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Logo from "./Logo";

describe("<Logo />", () => {
  it("Should render Logo Component", () => {
    const { container } = render(<Logo />);

    expect(container).toBeInTheDocument();
  });
});
