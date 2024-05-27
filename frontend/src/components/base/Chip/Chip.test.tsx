import { render, screen } from "@testing-library/react";
import { Chip } from "./Chip";
import userEvent from "@testing-library/user-event";

describe("Chip", () => {
  it("renders a chip with a label", () => {
    render(<Chip label="Chip Label" />);
    expect(screen.getByText("Chip Label")).toBeInTheDocument();
  });

  it("calls onDismiss when the chip is clicked", async () => {
    const onDismiss = jest.fn();
    render(<Chip label="Chip Label" onDismiss={onDismiss} />);
    await userEvent.click(screen.getByTestId("chip-Chip Label"));
    expect(onDismiss).toHaveBeenCalled();
  });
});
