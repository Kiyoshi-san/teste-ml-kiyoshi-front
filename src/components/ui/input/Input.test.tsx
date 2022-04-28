import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "./Input";

describe("<Input />", () => {
  it("Should render Input Component", () => {
    const { container } = render(<Input />);

    expect(container).toBeInTheDocument();
  });
});
