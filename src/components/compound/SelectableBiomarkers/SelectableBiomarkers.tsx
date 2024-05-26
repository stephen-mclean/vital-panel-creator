import { useState } from "react";
import { useAvailableBiomarkers } from "../../../api/hooks/useAvailableBiomarkers";
import { Biomarker } from "../../../types";
import { Chip } from "../../base/Chip/Chip";
import { InfoMessage } from "../../base/InfoMessage/InfoMessage";
import { SelectableBiomarker } from "../SelectableBiomarker/SelectableBiomarker";
import { PaginationControls } from "../PaginationControls/PaginationControls";
import { DEFAULT_PAGE_LIMIT } from "../../../api/constants";

type Props = {
  selected: Biomarker[];
  onChange: (selected: Biomarker[]) => void;
  disabled?: boolean;
};

export const SelectableBiomarkers = ({
  selected,
  onChange,
  disabled,
}: Props) => {
  const [page, setPage] = useState(0);
  const { isError, isLoading, markers, total } = useAvailableBiomarkers({
    page,
    limit: DEFAULT_PAGE_LIMIT,
  });

  const goToNextPage = () => {
    setPage(page + 1);
  };

  const goToPreviousPage = () => {
    setPage(page - 1);
  };

  const canNavigateNext = total > (page + 1) * DEFAULT_PAGE_LIMIT;
  const canNavigatePrevious = page > 0;

  const removeBioMarker = (biomarker: Biomarker) => {
    onChange(selected.filter((b) => b.id !== biomarker.id));
  };

  if (isError) {
    return (
      <div className="flex justify-center">
        <InfoMessage
          type="error"
          message="Failed to load available biomarkers"
        />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <InfoMessage type="loading" message="Loading available biomarkers..." />
      </div>
    );
  }

  const isSelected = (biomarker: Biomarker) =>
    selected.some((b) => b.id === biomarker.id);

  const onToggle = (biomarker: Biomarker) => {
    if (isSelected(biomarker)) {
      onChange(selected.filter((b) => b.id !== biomarker.id));
    } else {
      onChange([...selected, biomarker]);
    }
  };

  return (
    <div className="flex flex-col">
      <span className="text-sm text-gray-600 mb-2">Biomarkers</span>
      <div className="flex gap-1 mb-4">
        {selected.map((b) => (
          <Chip
            label={b.name}
            key={b.id}
            onDismiss={() => removeBioMarker(b)}
            disabled={disabled}
          />
        ))}
      </div>

      <div className="flex flex-col gap-2">
        {markers.map((marker) => (
          <SelectableBiomarker
            key={marker.id}
            name={marker.name}
            description={marker.description}
            onToggle={() => onToggle(marker)}
            selected={isSelected(marker)}
            disabled={disabled}
          />
        ))}
        <div className="flex justify-end">
          <PaginationControls
            onNext={goToNextPage}
            onPrevious={goToPreviousPage}
            canNavigateNext={canNavigateNext}
            canNavigatePrevious={canNavigatePrevious}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
};
