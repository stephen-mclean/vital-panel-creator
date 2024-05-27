import { Panel } from "./Panel";
import { Panel as PanelType } from "../../../types";
import { render, screen } from "@testing-library/react";

describe("Panel", () => {
  it("renders the name, markers, and collection method provided", () => {
    const panel: PanelType = {
      name: "Panel Name",
      markers: [
        { id: 1, name: "Marker 1" },
        { id: 2, name: "Marker 2" },
      ],
      method: "testkit",
    };

    render(<Panel panel={panel} onDelete={() => {}} onEdit={() => {}} />);

    expect(screen.getByText("Panel Name")).toBeInTheDocument();
    expect(screen.getByText("Marker 1")).toBeInTheDocument();
    expect(screen.getByText("Marker 2")).toBeInTheDocument();
    expect(screen.getByText("Test Kit")).toBeInTheDocument();
  });
});
