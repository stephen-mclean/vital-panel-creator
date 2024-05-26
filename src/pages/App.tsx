import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/base/Button/Button";
import { PanelList } from "../components/compound/PanelList/PanelList";
import { Panel } from "../types";
import { PageLayout } from "../components/compound/PageLayout/PageLayout";

function App() {
  const navigate = useNavigate();

  const onEditPanel = (panel: Panel) => {
    navigate(`/edit/${panel.id}`);
  };

  const onDeletePanel = (panel: Panel) => {
    navigate(`/delete/${panel.id}`);
  };

  return (
    <PageLayout>
      <div className="flex justify-between">
        <h1 className="text-3xl text-gray-700">Panels</h1>
        <Link to="/new">
          <Button variant="primary">Create Panel</Button>
        </Link>
      </div>

      <PanelList onEdit={onEditPanel} onDelete={onDeletePanel} />
    </PageLayout>
  );
}

export default App;
