import { useEffect, useState } from "react";
import { Panel } from "../../types";
import { PANELS_STORAGE_KEY } from "../constants";

const fetchPanel = async (id: number) => {
  // Simulate a network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const stored = localStorage.getItem(PANELS_STORAGE_KEY);

  if (!stored) {
    return null;
  }

  const panels = JSON.parse(stored) as Panel[];
  return panels.find((panel) => panel.id === id) ?? null;
};

export const usePanel = ({ id }: { id: number }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [panel, setPanel] = useState<Panel | null>(null);

  useEffect(() => {
    setIsLoading(true);

    const loadPanel = async () => {
      const panel = await fetchPanel(id);
      setPanel(panel);
      setIsLoading(false);
    };

    loadPanel();
  }, [id]);

  return {
    isLoading,
    panel,
  };
};
