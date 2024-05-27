import { render, screen } from "@testing-library/react";
import { PaginationControls } from "./PaginationControls";
import userEvent from "@testing-library/user-event";

describe("PaginationControls", () => {
  it("renders a previous button", () => {
    render(
      <PaginationControls
        onNext={() => {}}
        onPrevious={() => {}}
        canNavigateNext={true}
        canNavigatePrevious={true}
      />
    );

    expect(screen.getByTestId("previous-button")).toBeInTheDocument();
  });

  it("renders a next button", () => {
    render(
      <PaginationControls
        onNext={() => {}}
        onPrevious={() => {}}
        canNavigateNext={true}
        canNavigatePrevious={true}
      />
    );

    expect(screen.getByTestId("next-button")).toBeInTheDocument();
  });

  it("disables the previous button when canNavigatePrevious is false", () => {
    render(
      <PaginationControls
        onNext={() => {}}
        onPrevious={() => {}}
        canNavigateNext={true}
        canNavigatePrevious={false}
      />
    );

    expect(screen.getByTestId("previous-button")).toBeDisabled();
  });

  it("disables the next button when canNavigateNext is false", () => {
    render(
      <PaginationControls
        onNext={() => {}}
        onPrevious={() => {}}
        canNavigateNext={false}
        canNavigatePrevious={true}
      />
    );

    expect(screen.getByTestId("next-button")).toBeDisabled();
  });

  it("calls onPrevious when the previous button is clicked", async () => {
    const onPrevious = jest.fn();
    render(
      <PaginationControls
        onNext={() => {}}
        onPrevious={onPrevious}
        canNavigateNext={true}
        canNavigatePrevious={true}
      />
    );

    await userEvent.click(screen.getByTestId("previous-button"));

    expect(onPrevious).toHaveBeenCalled();
  });

  it("calls onNext when the next button is clicked", async () => {
    const onNext = jest.fn();
    render(
      <PaginationControls
        onNext={onNext}
        onPrevious={() => {}}
        canNavigateNext={true}
        canNavigatePrevious={true}
      />
    );

    await userEvent.click(screen.getByTestId("next-button"));

    expect(onNext).toHaveBeenCalled();
  });
});
