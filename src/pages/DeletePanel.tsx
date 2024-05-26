import { useNavigate, useParams } from "react-router-dom";
import { useRemovePanel } from "../api/hooks/useRemovePanel";
import { usePanel } from "../api/hooks/usePanel";
import { PageLayout } from "../components/compound/PageLayout/PageLayout";
import { InfoMessage } from "../components/base/InfoMessage/InfoMessage";
import { Button } from "../components/base/Button/Button";

export const DeletePanel = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { isLoading, panel } = usePanel({ id: Number(id) });
  const { isLoading: isRemovingPanel, remove } = useRemovePanel({
    onSuccess: () => {
      navigate("/");
    },
  });

  const handleDelete = () => {
    remove(Number(id));
  };

  const onCancel = () => {
    navigate("/");
  };

  if (isLoading) {
    return (
      <PageLayout>
        <h1 className="text-3xl text-gray-700">Delete your panel</h1>
        <InfoMessage type="loading" message="Loading panel information..." />
      </PageLayout>
    );
  }

  if (!panel) {
    return (
      <PageLayout>
        <h1 className="text-3xl text-gray-700">Panel not found</h1>
        <InfoMessage
          type="error"
          message="The panel you are looking for does not exist."
        />
      </PageLayout>
    );
  }

  const removeButtonContent = isRemovingPanel ? (
    <i className="fa-solid fa-circle-notch animate-spin"></i>
  ) : (
    "Delete"
  );

  return (
    <PageLayout>
      <h1 className="text-3xl text-gray-700">Delete your panel</h1>
      <span className="text-xl text-gray-600">
        Are you sure you want to delete "{panel.name}"?
      </span>
      <div className="flex gap-2 justify-end">
        <Button onClick={onCancel}>Cancel</Button>
        <Button
          variant="error"
          onClick={handleDelete}
          disabled={isRemovingPanel}
        >
          {removeButtonContent}
        </Button>
      </div>
    </PageLayout>
  );
};
