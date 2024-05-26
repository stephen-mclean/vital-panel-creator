import { useState } from "react";
import { Panel } from "../../types";
import { PANELS_STORAGE_KEY } from "../constants";

const updatePanel = async (panel: Panel) => {
  // Simulate a network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const stored = localStorage.getItem(PANELS_STORAGE_KEY);

  if (!stored) {
    return;
  }

  const panels = JSON.parse(stored) as Panel[];
  const updatedPanels = panels.map((p) => (p.id === panel.id ? panel : p));
  localStorage.setItem(PANELS_STORAGE_KEY, JSON.stringify(updatedPanels));
};

export const useUpdatePanel = ({ onSuccess }: { onSuccess?: () => void }) => {
  const [isLoading, setIsLoading] = useState(false);

  const update = async (panel: Panel) => {
    setIsLoading(true);
    await updatePanel(panel);
    setIsLoading(false);
    onSuccess?.();
  };

  return {
    update,
    isLoading,
  };
};
