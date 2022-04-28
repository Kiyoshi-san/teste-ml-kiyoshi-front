import {
  screen,
  render,
  act,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "./Form";

const children = <div>test</div>;
const args = {
  children: children,
  onSubmit: () => null,
};

describe("<Form />", () => {
  it("Should render Form Component", () => {
    const { container } = render(<Form {...args} />);

    expect(container).toBeInTheDocument();
  });

  it("Should submit the Form", async () => {
    const onSubmit = jest.fn((e) => e.preventDefault());

    render(
      <Form onSubmit={onSubmit}>
        <button type="submit" />
      </Form>
    );

    const button = screen.getByRole("button");

    act(() => {
      fireEvent.click(button);
    });

    await waitFor(() => {
      expect(onSubmit).toBeCalledTimes(1);
    });
  });
});
