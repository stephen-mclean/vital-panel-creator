import { useEffect, useState } from "react";
import { DEFAULT_PAGE_LIMIT, PANELS_STORAGE_KEY } from "../constants";
import { Panel } from "../../types";

const fetchPanels = async () => {
  // Simulate a network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const stored = localStorage.getItem(PANELS_STORAGE_KEY);

  if (!stored) {
    return [];
  }

  return JSON.parse(stored) as Panel[];
};

export const usePanels = ({
  page = 0,
  limit = DEFAULT_PAGE_LIMIT,
}: {
  page: number;
  limit: number;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [allPanels, setAllPanels] = useState<Panel[]>([]);

  const pagedPanels = allPanels.slice(page * limit, (page + 1) * limit);

  useEffect(() => {
    setIsLoading(true);

    const loadPanels = async () => {
      const panels = await fetchPanels();
      setAllPanels(panels);
      setIsLoading(false);
    };

    loadPanels();
  }, []);

  return {
    isLoading,
    panels: pagedPanels,
    total: allPanels.length,
  };
};
