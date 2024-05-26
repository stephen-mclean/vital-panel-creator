import { Button } from "../../base/Button/Button";

type Props = {
  onNext: () => void;
  onPrevious: () => void;
  canNavigateNext: boolean;
  canNavigatePrevious: boolean;
  disabled?: boolean;
};

export const PaginationControls = ({
  onNext,
  onPrevious,
  canNavigateNext,
  canNavigatePrevious,
  disabled,
}: Props) => {
  return (
    <div className="flex gap-2">
      <Button
        variant="ghost"
        onClick={onPrevious}
        disabled={!canNavigatePrevious || disabled}
      >
        <i className="fa-solid fa-chevron-left"></i>
        Previous
      </Button>
      <Button
        variant="ghost"
        onClick={onNext}
        disabled={!canNavigateNext || disabled}
      >
        Next
        <i className="fa-solid fa-chevron-right"></i>
      </Button>
    </div>
  );
};
