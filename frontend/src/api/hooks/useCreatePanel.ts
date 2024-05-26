import { useState } from "react";
import { Panel } from "../../types";
import { PANELS_STORAGE_KEY } from "../constants";

const createPanel = async (panel: Panel) => {
  // Simulate a network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Create a random id for the panel
  panel.id = Math.floor(Math.random() * 1000);

  const stored = localStorage.getItem(PANELS_STORAGE_KEY);

  if (!stored) {
    localStorage.setItem(PANELS_STORAGE_KEY, JSON.stringify([panel]));
    return;
  }

  const panels = JSON.parse(stored) as Panel[];
  localStorage.setItem(PANELS_STORAGE_KEY, JSON.stringify([...panels, panel]));
};

export const useCreatePanel = ({ onSuccess }: { onSuccess?: () => void }) => {
  const [isLoading, setIsLoading] = useState(false);

  const create = async (panel: Panel) => {
    setIsLoading(true);
    await createPanel(panel);
    setIsLoading(false);
    onSuccess?.();
  };

  return {
    create,
    isLoading,
  };
};
