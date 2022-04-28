import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

const args = {
  text: "Botão",
};

describe("<Button />", () => {
  it("Should render the Button component", () => {
    const { container } = render(<Button {...args} />);

    expect(container).toBeInTheDocument();
  });
});
