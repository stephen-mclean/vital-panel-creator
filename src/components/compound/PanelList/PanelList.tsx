import { useState } from "react";
import { DEFAULT_PAGE_LIMIT } from "../../../api/constants";
import { usePanels } from "../../../api/hooks/usePanels";
import { InfoMessage } from "../../base/InfoMessage/InfoMessage";
import { Panel } from "../Panel/Panel";
import { Panel as PanelType } from "../../../types";
import { PaginationControls } from "../PaginationControls/PaginationControls";

type Props = {
  onEdit: (panel: PanelType) => void;
  onDelete: (panel: PanelType) => void;
};

export const PanelList = ({ onEdit, onDelete }: Props) => {
  const [page, setPage] = useState(0);
  const { isLoading, panels, total } = usePanels({
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

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <InfoMessage type="loading" message="Loading available panels..." />
      </div>
    );
  }

  if (panels.length === 0) {
    return (
      <div className="flex justify-center">
        <InfoMessage type="info" message="There are no panels to display." />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {panels.map((panel) => (
        <Panel
          key={panel.id}
          panel={panel}
          onEdit={() => onEdit(panel)}
          onDelete={() => onDelete(panel)}
        />
      ))}
      <div className="flex justify-end">
        <PaginationControls
          onNext={goToNextPage}
          onPrevious={goToPreviousPage}
          canNavigateNext={canNavigateNext}
          canNavigatePrevious={canNavigatePrevious}
        />
      </div>
    </div>
  );
};
