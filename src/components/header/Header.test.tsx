import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("<Header />", () => {
  it("Should render Header component", () => {
    const { container } = render(<Header />);

    expect(container).toBeInTheDocument();
  });
});
