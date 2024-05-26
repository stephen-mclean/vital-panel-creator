export type Biomarker = {
  id: number;
  name: string;
  description?: string;
};

export type CollectionMethod =
  | "testkit"
  | "walk_in_test"
  | "at_home_phlebotomy";

export const COLLECTION_METHOD_DISPLAY_NAMES: Record<CollectionMethod, string> =
  {
    testkit: "Test Kit",
    walk_in_test: "Walk In Test",
    at_home_phlebotomy: "At Home Phlebotomy",
  };

export type Panel = {
  name: string;
  markers: Biomarker[];
  method: CollectionMethod;
};
