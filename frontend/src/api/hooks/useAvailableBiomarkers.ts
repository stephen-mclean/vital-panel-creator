import { useEffect, useState } from "react";
import { Biomarker } from "../../types";
import { DEFAULT_PAGE_LIMIT } from "../constants";

type UseAvailableBiomarkersConfig = {
  page: number;
  limit: number;
};

const fetchBiomarkers = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const markers: Biomarker[] = [
    {
      id: 1,
      name: "Biomarker 1",
      description: "This is the first biomarker",
    },
    {
      id: 2,
      name: "Biomarker 2",
      description: "This is the second biomarker",
    },
    {
      id: 3,
      name: "Biomarker 3",
      description: "This is the third biomarker",
    },
    {
      id: 4,
      name: "Biomarker 4",
      description: "This is the fourth biomarker",
    },
    {
      id: 5,
      name: "Biomarker 5",
      description: "This is the fifth biomarker",
    },
    {
      id: 6,
      name: "Biomarker 6",
      description: "This is the sixth biomarker",
    },
    {
      id: 7,
      name: "Biomarker 7",
      description: "This is the seventh biomarker",
    },
    {
      id: 8,
      name: "Biomarker 8",
      description: "This is the eighth biomarker",
    },
    {
      id: 9,
      name: "Biomarker 9",
      description: "This is the ninth biomarker",
    },
    {
      id: 10,
      name: "Biomarker 10",
      description: "This is the tenth biomarker",
    },
  ];

  return { markers };
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
