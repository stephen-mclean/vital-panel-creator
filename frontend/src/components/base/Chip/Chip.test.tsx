import { render, screen } from "@testing-library/react";
import { Chip } from "./Chip";

describe("Chip", () => {
  it("renders a chip with a label", () => {
    render(<Chip label="Chip Label" />);
    expect(screen.getByText("Chip Label")).toBeInTheDocument();
  });
});
