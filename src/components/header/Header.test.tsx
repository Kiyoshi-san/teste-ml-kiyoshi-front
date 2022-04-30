import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RendererWrapper } from "components/rendererWrapper";
import Header from "./Header";

describe("<Header />", () => {
  it("Should render Header component", () => {
    const { container } = render(
      <RendererWrapper>
        <Header />
      </RendererWrapper>
    );

    expect(container).toBeInTheDocument();
  });
});
