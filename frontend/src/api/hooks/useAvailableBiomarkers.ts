import { useEffect, useState } from "react";
import { Biomarker } from "../../types";
import { DEFAULT_PAGE_LIMIT } from "../constants";

type UseAvailableBiomarkersConfig = {
  page: number;
  limit: number;
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
}: UseAvailableBiomarkersConfig) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [allMarkers, setAllMarkers] = useState<Biomarker[]>([]);

  useEffect(() => {
    setIsLoading(true);

    const loadBiomarkers = async () => {
      try {
        const biomarkers = await fetchBiomarkers();
        setAllMarkers(biomarkers.markers);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        console.log(" ==== got error =====", error);
      }
    };

    loadBiomarkers();
  }, []);

  const pagedMarkers = allMarkers.slice(page * limit, (page + 1) * limit);
  const mappedMarkers: Biomarker[] = pagedMarkers.map((marker) => ({
    id: marker.id,
    name: marker.name,
    description: marker.description,
  }));

  return {
    isLoading,
    isError,
    markers: mappedMarkers,
    total: allMarkers.length,
  };
};
