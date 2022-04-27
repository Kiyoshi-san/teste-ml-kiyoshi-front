import { render } from "@testing-library/react";
import Image from "./Image";

const args = {
  src: "/img/mercado-livre.png",
  alt: "logo",
};

describe("<Image />", () => {
  it("Should render the Image Component", () => {
    const { container } = render(<Image {...args} />);

    expect(container).toBeInTheDocument();
  });
});
