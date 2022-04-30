import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RendererWrapper } from "components/rendererWrapper";
import SearchBar from "./SearchBar";

describe("<SearchBar />", () => {
  it("Should render SearchBar", () => {
    const { container } = render(
      <RendererWrapper>
        <SearchBar />
      </RendererWrapper>
    );

    expect(container).toBeInTheDocument();
  });
});
