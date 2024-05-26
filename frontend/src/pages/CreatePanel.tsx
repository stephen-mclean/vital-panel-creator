import { useNavigate } from "react-router-dom";
import { PageLayout } from "../components/compound/PageLayout/PageLayout";
import { PanelForm } from "../components/compound/PanelForm/PanelForm";
import { useCreatePanel } from "../api/hooks/useCreatePanel";

const CreatePanel = () => {
  const navigate = useNavigate();
  const { create, isLoading } = useCreatePanel({
    onSuccess: () => navigate("/"),
  });

  const onCancel = () => navigate("/");

  return (
    <PageLayout>
      <h1 className="text-3xl text-gray-700">Create a new panel</h1>

      <PanelForm onCancel={onCancel} onSubmit={create} isLoading={isLoading} />
    </PageLayout>
  );
};

export default CreatePanel;
