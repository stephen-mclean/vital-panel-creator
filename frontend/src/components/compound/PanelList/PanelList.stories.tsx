import type { Meta, StoryObj } from "@storybook/react";
import { PanelList } from "./PanelList";
import { fn } from "@storybook/test";
import { Panel } from "../../../types";
import { PANELS_STORAGE_KEY } from "../../../api/constants";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Compound/PanelList",
  component: PanelList,
  args: {
    onEdit: fn(),
    onDelete: fn(),
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof PanelList>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
};

Default.loaders = [
  () => {
    localStorage.removeItem(PANELS_STORAGE_KEY);
  },
];

export const WithOnePanel: Story = {
  args: {},
};

WithOnePanel.loaders = [
  () => {
    const panel: Panel = {
      id: 1,
      name: "Panel 1",
      markers: [
        {
          id: 1,
          name: "Biomarker 1",
        },
        {
          id: 2,
          name: "Biomarker 2",
        },
      ],
      method: "testkit",
    };

    localStorage.setItem(PANELS_STORAGE_KEY, JSON.stringify([panel]));
  },
];

export const WithMultiplePagesOfPanels: Story = {
  args: {},
};

WithMultiplePagesOfPanels.loaders = [
  () => {
    const panels: Panel[] = Array.from({ length: 20 }, (_, index) => ({
      id: index,
      name: `Panel ${index}`,
      markers: [
        {
          id: index,
          name: `Biomarker ${index}`,
        },
      ],
      method: "testkit",
    }));

    localStorage.setItem(PANELS_STORAGE_KEY, JSON.stringify(panels));
  },
];
