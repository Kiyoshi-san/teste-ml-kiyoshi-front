import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBar from "./SearchBar";

describe("<SearchBar />", () => {
  it("Should render SearchBar", () => {
    const { container } = render(<SearchBar />);

    expect(container).toBeInTheDocument();
  });
});
