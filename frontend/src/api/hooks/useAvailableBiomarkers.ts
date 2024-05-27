import { useEffect, useState } from "react";
import Fuse from "fuse.js";
import { Biomarker } from "../../types";
import { DEFAULT_PAGE_LIMIT } from "../constants";

type UseAvailableBiomarkersConfig = {
  page: number;
  limit: number;
  query?: string;
};

const fetchBiomarkers = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/api/markers`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch biomarkers");
  }

  return response.json() as Promise<{ markers: Biomarker[] }>;
};

export const useAvailableBiomarkers = ({
  page = 0,
  limit = DEFAULT_PAGE_LIMIT,
  query,
}: UseAvailableBiomarkersConfig) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [allMarkers, setAllMarkers] = useState<Biomarker[]>([]);
  const fuse = new Fuse(allMarkers, { keys: ["name", "description"] });

  useEffect(() => {
    setIsLoading(true);

    const loadBiomarkers = async () => {
      try {
        const biomarkers = await fetchBiomarkers();
        setAllMarkers(biomarkers.markers);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    };

    loadBiomarkers();
  }, []);

  const filteredMarkers = query
    ? fuse.search(query).map((r) => r.item)
    : allMarkers;
  const pagedMarkers = filteredMarkers.slice(page * limit, (page + 1) * limit);
  const mappedMarkers: Biomarker[] = pagedMarkers.map((marker) => ({
    id: marker.id,
    name: marker.name,
    description: marker.description,
  }));

  return {
    isLoading,
    isError,
    markers: mappedMarkers,
    total: filteredMarkers.length,
  };
};
