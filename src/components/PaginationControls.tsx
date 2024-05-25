import { Button } from "./Button";

type Props = {
  onNext: () => void;
  onPrevious: () => void;
  canNavigateNext: boolean;
  canNavigatePrevious: boolean;
};

export const PaginationControls = ({
  onNext,
  onPrevious,
  canNavigateNext,
  canNavigatePrevious,
}: Props) => {
  return (
    <div className="flex gap-2">
      <Button
        variant="ghost"
        onClick={onPrevious}
        disabled={!canNavigatePrevious}
      >
        <i className="fa-solid fa-chevron-left"></i>
        Previous
      </Button>
      <Button variant="ghost" onClick={onNext} disabled={!canNavigateNext}>
        Next
        <i className="fa-solid fa-chevron-right"></i>
      </Button>
    </div>
  );
};
