import { useState } from "react";
import { Panel } from "../../types";
import { PANELS_STORAGE_KEY } from "../constants";

const removePanel = async (panelId: number) => {
  // Simulate a network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const stored = localStorage.getItem(PANELS_STORAGE_KEY);

  if (!stored) {
    return;
  }

  const panels = JSON.parse(stored) as Panel[];
  const updatedPanels = panels.filter((p) => p.id !== panelId);
  localStorage.setItem(PANELS_STORAGE_KEY, JSON.stringify(updatedPanels));
};

export const useRemovePanel = ({ onSuccess }: { onSuccess?: () => void }) => {
  const [isLoading, setIsLoading] = useState(false);

  const remove = async (panelId: number) => {
    setIsLoading(true);
    await removePanel(panelId);
    setIsLoading(false);
    onSuccess?.();
  };

  return {
    remove,
    isLoading,
  };
};
