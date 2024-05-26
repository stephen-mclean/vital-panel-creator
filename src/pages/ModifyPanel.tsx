import { useNavigate, useParams } from "react-router-dom";
import { PageLayout } from "../components/compound/PageLayout/PageLayout";
import { PanelForm } from "../components/compound/PanelForm/PanelForm";
import { usePanel } from "../api/hooks/usePanel";
import { InfoMessage } from "../components/base/InfoMessage/InfoMessage";
import { useUpdatePanel } from "../api/hooks/useUpdatePanel";

export const ModifyPanel = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { isLoading, panel } = usePanel({ id: Number(id) });
  const { update, isLoading: isUpdatingPanel } = useUpdatePanel({
    onSuccess: () => navigate("/"),
  });

  const onCancel = () => navigate("/");

  if (isLoading) {
    return (
      <PageLayout>
        <h1 className="text-3xl text-gray-700">Update your panel</h1>
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

  return (
    <PageLayout>
      <h1 className="text-3xl text-gray-700">Update your panel</h1>

      <PanelForm
        onCancel={onCancel}
        onSubmit={update}
        isLoading={isUpdatingPanel}
        panel={panel}
      />
    </PageLayout>
  );
};
