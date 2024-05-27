import {
  COLLECTION_METHOD_DISPLAY_NAMES,
  CollectionMethod,
  Panel as PanelType,
} from "../../../types";
import { Button } from "../../base/Button/Button";
import { Chip } from "../../base/Chip/Chip";

type Props = {
  panel: PanelType;
  onDelete: () => void;
  onEdit: () => void;
};

const MAX_MARKERS_TO_DISPLAY = 5;

export const Panel = ({
  panel: { name, markers, method },
  onDelete,
  onEdit,
}: Props) => {
  const getDisplayableCollectionMethod = (method: CollectionMethod) => {
    return COLLECTION_METHOD_DISPLAY_NAMES[method];
  };

  const markersToDisplay = markers.slice(0, MAX_MARKERS_TO_DISPLAY);
  const remainingMarkers = markers.length - markersToDisplay.length;

  return (
    <div className="flex flex-col gap-4 rounded p-2 border border-gray-100">
      <div className="flex justify-between gap-2 overflow-hidden">
        <div className="flex flex-col gap-2">
          <span className="font-sans uppercase text-xs text-gray-500 font-light">
            Name
          </span>
          <span
            className="font-sans text-xs font-medium text-gray-600 line-clamp-1"
            title={name}
          >
            {name}
          </span>
        </div>

        <div className="flex gap-1">
          <Button tooltip="Edit" onClick={onEdit} data-testid="edit-button">
            <i className="fa-solid fa-pen"></i>
          </Button>

          <Button
            variant="error"
            tooltip="Delete"
            onClick={onDelete}
            data-testid="delete-button"
          >
            <i className="fa-solid fa-trash"></i>
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="font-sans uppercase text-xs text-gray-500 font-light">
          Biomarkers
        </span>
        <div className="flex gap-1 flex-wrap max-h-24 overflow-y-auto">
          {markersToDisplay.map((marker) => (
            <Chip key={marker.id} label={marker.name} />
          ))}
          {remainingMarkers > 0 && <Chip label={`+${remainingMarkers}`} />}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="font-sans uppercase text-xs text-gray-500 font-light">
          Collection Method
        </span>
        <span className="font-sans text-xs font-medium text-gray-600">
          {getDisplayableCollectionMethod(method)}
        </span>
      </div>
    </div>
  );
};
